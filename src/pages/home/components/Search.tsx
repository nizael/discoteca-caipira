import axios from "axios"
import { useSearchStore } from "../stores/useSearchStore"
import { useState } from "react"
import { IAlbum, ITrail } from "../../../common/types/index.d"

export const Search = () => {
  const { onClose, isOpen } = useSearchStore()
  const [albums, setAlbums] = useState<(IAlbum & { trails: ITrail[] })[] | null>(null)
  const [partialName, setPartialName] = useState('')

  if (!isOpen) return null

  async function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.currentTarget.value
    setPartialName(value)
    if (!value) {
      setAlbums(null)
      return
    }

    const url = `${process.env.REACT_APP_BASE_URL}/album/search?name=${value}`
    await axios.get(url).then(response => {
      setAlbums(response.data)
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div onClick={onClose} className=" flex flex-col items-center justify-center absolute p-4 w-full h-full overflow-y-auto left-0 top-0 bg-slate-500 bg-opacity-80">
      <div className="flex flex-col gap-4 p-4 rounded-md shadow bg-white sm:max-w-lg w-full" onClick={evt => evt.stopPropagation()}>
        <input onChange={evt => handleChange(evt)} autoFocus className="w-full p-2" type="text" placeholder="Pesquise por album ou música" />
        <div className="flex flex-col gap-2">
          {albums?.map(item => {
            const trail = item.trails.find(item => item.name.includes(partialName))
            return (
              <a href={`/album-view/${item.id}`} key={item.id} className="flex flex-col gap-2 py-2 border-b last:border-none">
                <p className="text-base font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{trail?.name}</p>
              </a>
            )
          })}
        </div>
      </div>

    </div>
  )
}