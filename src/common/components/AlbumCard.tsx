export const AlbumCard = ({name, releaseYear}:{releaseYear: number, name: string}) => {
  const urlImg = 'https://blog.cowboystore.com.br/wp-content/uploads/2018/04/tiao-carreiro-e-pardinho-m%C3%BAsicas.png'
  return (
    <a href="/album-view" className="bg-white w-fit shadow flex flex-col gap-4 items-center">
      <img src={urlImg} alt="Capa do Álbum" className="w-52 h-52" />
      <div className="flex flex-col gap-4 pb-4 px-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">Lançamento: {releaseYear}</p>
      </div>
    </a>
  )
}