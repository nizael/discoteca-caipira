import { useEffect, useState } from "react"
import { AlbumCard } from "../../../common/components/AlbumCard"
import { useAlbumStore } from "../stores/useAlbumStore"
import { IAlbum } from "../../../common/types/index.d"

export const Emphasis = () => {
  const [emphasis, setEmphasis] = useState<IAlbum | null>(null)
  const { albums } = useAlbumStore()
  useEffect(() => {
    if (albums.length) {
      const emphasis = albums.reduce((acc, curr) => {
        const album = new Date(acc.created_at).getTime() < new Date(curr.created_at).getDate() ? acc : curr
        return album
      }, {} as IAlbum)
      setEmphasis(emphasis)
    }
  }, [albums])
  
  if(!emphasis) return null
  return (
    <section className="flex flex-col gap-6 max-sm:items-center">
      <h2 className="text-2xl font-bold">Destaque</h2>
      <AlbumCard name={emphasis.name} releaseYear={emphasis.release_year} />
    </section>
  )
}