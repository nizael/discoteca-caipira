import { Input } from "../../../common/components/Input"
import axios from "axios"
import { useCreateAlbumStore } from "../stores/useCreateAlbumStore"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export const AlbumForm = () => {
  const albumId = useSearchParams()[0].getAll('id')[0]
  const { album, setAlbum } = useCreateAlbumStore()
  useEffect(() => {
    if (!albumId) return
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/album/${albumId}`
      await axios.get(url).then(response => {
        const { trails, ...rest } = response.data
        setAlbum(rest)
        if (trails.length) useCreateAlbumStore.setState({ trails: trails })
      }).catch(error => {
        console.log(error)
      })
    })()
  }, [albumId])


  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const form = evt.currentTarget
    const data = {
      name: form.album_name.value,
      artists: "Tião Carreiro e Pardinho",
      releaseYear: Number(form.release_year.value), // adicionar tratativa para núremo inválido
      coverImageUrl: form.cover_image_url.value
    }

    const url = process.env.REACT_APP_BASE_URL + '/album/register'
    await axios.post(url, data).then(response => {
      setAlbum(response.data)
      console.log(response.data)
      form.reset()
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <section className="flex flex-col gap-4 shadow rounded-md p-2">
      <h2 className="text-xl font-semibold">Album</h2>
      {!album ? (
        <form onSubmit={evt => handleSubmit(evt)} className="flex flex-col gap-4" >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <Input required label="Nome" id="album_name" name="album_name" placeholder="Insira o nome no album" />
            <Input type="number" required label="Ano de lançamento" id="release_year" name="release_year" placeholder="Insira o ano de lançamento" />
            <Input required label="Imagem de capa" id="cover_image_url" name="cover_image_url" placeholder="Insira a url da imagem de capa" />
          </div>
          <button type="submit" className="shadow w-full md:w-fit py-2 px-4 bg-green-600 rounded-md flex items-center justify-center gap-2 text-white">Salvar album</button>
        </form>
      ) : (
        <div className="flex items-center bg-white gap-4 h-24">
          <img src={album.cover_image_url} alt="Capa do Álbum" className="w-24 h-24" />
          <div className="flex flex-col grow">
            <h3 className="text-xl font-bold">{album.name}</h3>
            <p className="text-gray-600">Ano de Lançamento: {album.release_year}</p>
          </div>
        </div>
      )
      }
    </section>
  )
}