import { create } from "zustand";
import { IAlbum, ITrail } from "../../../common/types/index.d";
interface IUseCreateAlbumStore {
  album?: IAlbum
  trails?: ITrail[]
  setAlbum(album: IAlbum): void
  setTrails(trails: ITrail[]): void
  removeTrail(id: number): void
}
export const useAlbumStore = create<IUseCreateAlbumStore>((set, get) => ({
  setAlbum: album => {
    set({ album })
  },
  setTrails: trails => {
    set({ trails })
  },
  removeTrail: (id) => {
    const currentTrails = get().trails
    const trails = currentTrails?.filter(trail => trail.id !== id)
    set({ trails })
  }
}))