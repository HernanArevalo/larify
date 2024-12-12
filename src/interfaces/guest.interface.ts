export interface Guest {
  name: string,
  artist: {
    genres: string[],
    id: string,
    name: string,
    picture: string
  }
}
