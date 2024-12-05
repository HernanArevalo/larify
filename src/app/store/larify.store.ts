import { create } from 'zustand'
import { Artist } from '../interfaces'

type Store = {
  artist: string,
  artists: Artist[],
  setArtists: (artists:Artist[]) => void
  setArtist: (artists:string) => void
}

export const larifyStore = create<Store>()((set) => ({
  artist: '',
  artists: [],

  setArtists: (artists) => {
      set({
        artists: artists
      })
  },
  setArtist: (artist:string) => {
    set({ artist })
  }
}))
