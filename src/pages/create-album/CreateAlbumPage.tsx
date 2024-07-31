import { AlbumForm } from "./components/AlbumForm";
import { Header } from "../../common/components/Header";
import { TrailForm } from "./components/TrailForm";
export default function CreateAlbumPage() {

  return (
    <div data-site-layout className="flex flex-col">
      <main className="flex flex-col grow gap-6">
        <Header />
        <AlbumForm />
        <TrailForm />
      </main>
    </div>
  )
}