export const AlbumListView = ({name,  releaseYar, id}:{name:string, releaseYar:number, id: number}) => {
  const urlImg = 'https://blog.cowboystore.com.br/wp-content/uploads/2018/04/tiao-carreiro-e-pardinho-m%C3%BAsicas.png'
  return (
    <a href={`/album-view/${id}`} className="flex items-center bg-white gap-4 h-24 shadow">
      <img src={urlImg} alt="Capa do Álbum" className="w-24 h-24" />
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">Lançamento: {releaseYar}</p>
      </div>
    </a>
  )
}