import { create } from "zustand";
import { IAlbum } from "../../../common/types/index.d";  

interface IUseAlbumStore {
  albums: IAlbum[]
  setAlbums(albums: IAlbum[]): void
}



export const useAlbumStore = create<IUseAlbumStore>((set) => ({
  albums: [],
  setAlbums: (albums) => {
    set({ albums: albums })
  }
}))