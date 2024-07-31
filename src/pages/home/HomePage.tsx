import { Discography } from "./components/Discography";
import { Emphasis } from "./components/Emphasis";
import { Footer } from "../../common/components/Footer";
import { Hero } from "./components/Hero";
import { useEffect } from "react";
import axios from "axios";
import { useAlbumStore } from "./stores/useAlbumStore";
import { Header } from "../../common/components/Header";

export default function HomePage() {
  const { setAlbums } = useAlbumStore()

  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_BASE_URL + '/album/list-all'
      await axios.get(url).then(response => {
        setAlbums(response.data)
      }).catch(error => {
        console.log(error)
      })
    })()
  }, [])
  return (
    <div data-site-layout className="flex flex-col">
      <main className="flex flex-col grow gap-10">
        <Header />
        <Hero />
        <Emphasis />
        <Discography />
        <Footer />
      </main>
    </div>
  );
}