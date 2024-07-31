import axios from "axios"
import { Input } from "../../../common/components/Input"
import { TrailListView } from "../../../common/components/TrailListView"
import { useCreateAlbumStore } from "../stores/useCreateAlbumStore"

export const TrailForm = () => {
  const { album, trails, setTrails } = useCreateAlbumStore()

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    if (!album) return
    const form = evt.currentTarget
    const data = {
      albumId: album.id,
      name: form.trail_name.value,
      author: form.trail_author.value,
      duration: form.trail_duration.value,
    }

    const url = process.env.REACT_APP_BASE_URL + '/trail/register'
    await axios.post(url, data).then(response => {
      setTrails(response.data)
      form.reset()
    }).catch(error => {
      console.log(error)
    })
  }

  async function handleDelete() {
    if (!album) return
    const url = `${process.env.REACT_APP_BASE_URL}/album/register/${album.id}`
    await axios.delete(url)
  }

  if(!album) return null
  return (
    <section className="flex flex-col gap-4 shadow rounded-md p-2">
      <h2 className="text-xl font-semibold">Trihas</h2>
      <div className="flex flex-col gap-2">
        {(trails && album) && trails.map(trail => <TrailListView key={trail.id} author={trail.author} coverImageUrl={album?.cover_image_url} duration={trail.duration} name={trail.name} />)}
      </div>
      {trails && <hr />}
      <form onSubmit={evt => handleSubmit(evt)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <Input required id="trail_name" name="trail_name" label="Nome" placeholder="Insira o nome da trilha" />
          <Input required id="trail_duration" name="trail_duration" label="Duração" placeholder="Insira a duração da trilha Ex.: 4:44 " />
          <Input required id="trail_author" name="trail_author" label="Autor" placeholder="Insira on nome do autor da trilha" />
        </div>
        <button type="submit" className="w-full md:w-fit shadow bg-green-600 text-white rounded-md px-4 py-2">Salvar trilha</button>
      </form>
    </section>
  )
}