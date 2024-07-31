import { create } from "zustand";
import { IAlbum, ITrail } from "../../../common/types/index.d";
interface IUseCreateAlbumStore {
  album?: IAlbum
  trails?: ITrail[]
  setAlbum(album: IAlbum): void
  setTrails(trail: ITrail): void
}
export const useCreateAlbumStore = create<IUseCreateAlbumStore>((set, get) => ({
  setAlbum: album => {
    set({ album: album })
  },
  setTrails: trail => {
    const currentTrails = get().trails || []
    set({ trails: [...currentTrails, trail] })
  }
}))