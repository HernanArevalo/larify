import { create } from 'zustand'
import { Artist } from '../interfaces'

type Store = {
  isLoading: boolean,
  artist: string,
  artists: Artist[],
  setArtists: (artists:Artist[]) => void,
  setArtist: (artists:string) => void,
  loading: () => void,
  notLoading: () => void,
}

export const larifyStore = create<Store>()((set) => ({
  isLoading: true,
  artist: '',
  artists: [],

  setArtists: (artists) => {
      set({
        artists: artists
      })
  },
  setArtist: (artist:string) => {
    set({ artist })
  },
  loading: () => {
    set({ isLoading: true })
  },
  notLoading: () => {
    set({ isLoading: false })
  },

}))
