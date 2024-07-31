export const Hero = ({name, releaseYear}:{name:string, releaseYear:number}) => {
  return (
    <section className="flex flex-col gap-4 bg-primary p-4">
      <h2 className="text-3xl font-bold">{name}</h2>
      <p className="text-lg">Lançamento:  <b className="font-bold">{releaseYear}</b></p>
    </section>
  )
}