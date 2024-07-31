import { AlbumForm } from "./components/AlbumForm";
import { Header } from "../../common/components/Header";
import { TrailForm } from "./components/TrailForm";
import { Footer } from "../../common/components/Footer";
export default function CreateAlbumPage() {

  return (
    <main data-site-layout className="flex flex-col gap-10">
      <div className="flex flex-col grow gap-10">
        <Header />
        <AlbumForm />
        <TrailForm />
      </div>
      <Footer />
    </main>
  )
}