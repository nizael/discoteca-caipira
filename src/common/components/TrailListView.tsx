interface ITrailListViewProps {
  coverImageUrl: string
  name: string
  author: string
  duration: string
}
export const TrailListView = ({ author, coverImageUrl, duration, name }: ITrailListViewProps) => {
  return (
    <div className="flex items-center py-2 cursor-default gap-4 w-full ">
      <img src={coverImageUrl} alt={name} className="w-14 h-14 " />
      <div className="flex flex-col gap-1 grow">
        <div className="flex max-sm:flex-col sm:items-center gap-1 sm:gap-4 ">
          <p>Nome: <b className="text-gray-600">{name}</b></p>
          <p>Autor: <b className="text-gray-600">{author}</b></p>
        </div>
        <p>Duração: <b className="text-gray-600">{duration}</b></p>
      </div>
    </div>
  )
}