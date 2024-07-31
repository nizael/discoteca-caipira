import { AlbumListView } from "../../../common/components/AlbumListView"
import { SearchIcon } from "../../../common/icons/SearchIcon"
import { useAlbumStore } from "../stores/useAlbumStore"
import { useSearchStore } from "../stores/useSearchStore"

export const Discography = () => {
  const { albums } = useAlbumStore()
  const { onOpen } = useSearchStore()
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-bold">Discografia</h2>
        <a href="/create-album" className="shadow px-4 py-2 bg-green-600 rounded-md flex items-center justify-center gap-2 text-white">Novo Album</a>
      </div>
      <button onClick={onOpen} className="p-2 gap-4 border rounded-md flex items-center w-full sm:w-1/2">
        <SearchIcon />
        <span className="text-gray-500">Pesquisa por album ou música</span>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          albums.length ? (
            albums.map((album) => <AlbumListView key={album.id} name={album.name} releaseYar={album.release_year} id={album.id} />)
          ) : (
            <p>Nenhum Album registrado.</p>
          )
        }
      </div>
    </section>
  )
}