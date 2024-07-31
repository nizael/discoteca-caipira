import axios from "axios"
import { useAlbumStore } from "../stores/useAlbumStore"

export interface IListItem {
  id: number
  name: string
  duration: string
}
export const ListItem = (props: IListItem) => {
  const { removeTrail } = useAlbumStore()

  async function handleDeleteTrail() {
    const url = `${process.env.REACT_APP_BASE_URL}/trail/${props.id}`
    await axios.delete(url).then(response => {
      removeTrail(props.id)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <li className="flex items-center p-2 shadow w-full gap-4 rounded-md group">
      <div className="flex items-center grow"  >
        <span>{props.name}</span>
        <span>-</span>
        <span className="text-gray-600">
          {props.duration}
        </span>
      </div>
      <button onClick={handleDeleteTrail} className="rounded-md shadow text-red-500 transition-all duration-200 text-sm font-bold w-10 h-10 flex items-center justify-center bg-white group-hover:text-white group-hover:bg-red-500">X</button>
    </li>
  )
}