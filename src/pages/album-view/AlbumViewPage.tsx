import { Footer } from "../../common/components/Footer";
import { Hero } from "./components/Hero";
import { Playlist } from "./components/Playlist";
import { Header } from "../../common/components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ITrail } from "../../common/types/index.d";
import { useAlbumStore } from "./stores/useAlbumStore";

export default function AlbumViewPage(props: any) {
  const { album, setAlbum, setTrails } = useAlbumStore()
  const params = useParams()

  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/album/${params.id}`
      await axios.get(url).then(response => {
        const { trails, ...rest } = response.data
        setAlbum(rest)
        setTrails(trails)
      }).catch(error => {
        console.log(error)
      })
    })()

  }, [])

  async function handleDeleteAlbum() {
    if (!album) return
    const url = `${process.env.REACT_APP_BASE_URL}/album/${album.id}`
    await axios.delete(url).then(response => {
      window.location.href = '/'
    }).catch(error => {
      console.log(error)
    })
  }

  if (!album) return null

  return (
    <div data-site-layout className="flex flex-col">
      <main className="flex flex-col grow">
        <Header />
        <Hero name={album.name} releaseYear={album.release_year} />
        <section className="flex flex-col gap-10">
          <div className="flex max-sm:flex-col gap-4">
            <img src={album?.cover_image_url} alt="Capa do Álbum" className="w-80 h-80 max-sm:self-center" />
            <Playlist/>
          </div>
          <div className="flex max-sm:flex-col items-center sm:gap-4">
            <button onClick={handleDeleteAlbum} className="w-full sm:w-fit bg-white border px-4 py-2 text-red-500 rounded-md hover:bg-red-500 hover:text-white">Excluir Album</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}