import { AlbumListView } from "../../../common/components/AlbumListView" 
import { useAlbumStore } from "../stores/useAlbumStore"

export const Discography = () => {
  const { albums } = useAlbumStore()
  
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-bold">Discografia</h2>
        <a href="/create-album" className="shadow px-4 py-2 bg-green-600 rounded-md flex items-center justify-center gap-2 text-white">Novo Album</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          albums.length ? (
            albums.map((album) => <AlbumListView key={album.id} name={album.name} releaseYar={album.release_year} id={album.id} />)
          ):(
            <p>Nenhum Album registrado.</p>
          )
        }
      </div>
    </section>
  )
}