import { useParams } from "react-router-dom"
import { ListItem } from "./ListItem"
import { useAlbumStore } from "../stores/useAlbumStore"

export const Playlist = () => {
  const { trails } = useAlbumStore()
  const params = useParams()

  return (
    <div className="flex flex-col gap-4 grow ">
      <h3 className="text-xl font-semibold">Músicas</h3>
      <ul className="flex flex-col gap-2 w-full">
        {trails?.length ? trails?.map(item => <ListItem key={item.id} duration={item.duration} id={item.id} name={item.name} />) : <p>Não há músicas neste album</p>}
      </ul>
      <a href={`/create-album?id=${params.id}`} className="w-fit px-4 py-2 bg-green-600 text-white rounded-md shadow">Adicionar música</a>
    </div>
  )
}