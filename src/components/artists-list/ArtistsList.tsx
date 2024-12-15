'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArtistItem, ArtistSkeleton } from '@/components'
import { getArtists } from '@/service'
import { larifyStore } from '@/store'
import { Artist } from '@/interfaces'

const defaultArtists: Artist[] = [
  {
    "name": "Lady Gaga",
    "picture": "https://i.scdn.co/image/ab6761610000e5eb4b09cd0839c6129c29d22f79",
    "id": "1HY2Jd0NmPuamShAr6KMms",
    "genres": [
      "art pop",
      "dance pop",
      "pop"
    ]
  },
  {
    "name": "Sandro",
    "picture": "https://i.scdn.co/image/ab6761610000e5ebb75aa8d6f683f83d5114a9b9",
    "id": "5srsgtoePlsp0eQIXmta1O",
    "genres": [
      "cancion melodica",
      "pop romantico"
    ]
  },
  {
    "name": "Andrés Calamaro",
    "picture": "https://i.scdn.co/image/ab6761610000e5eb46de1ff7aab6d657f7776229",
    "id": "3tAICgiSR5PfYY4B8qsoAU",
    "genres": [
      "argentine rock",
      "cantautor",
      "latin alternative",
      "pop argentino",
      "rock en espanol"
    ]
  },
  {
    "name": "KISS",
    "picture": "https://i.scdn.co/image/ab6761610000e5ebd8205a492a79bfe4b34c567a",
    "id": "07XSN3sPlIlB2L2XNcTwJw",
    "genres": [
      "glam rock",
      "hard rock",
      "rock"
    ]
  },

]

export const ArtistsList = () => {
  const params = useSearchParams();
  const query = params.get('artist')



  const { artist, artists, setArtists, setArtist, loading, isLoading, notLoading } = larifyStore()


  const updateArtists = async () => {
    loading()

    if (query && query.trim() !== '') {
      const newArtists = await getArtists(query)
      setArtists(newArtists)
      setArtist(query)
    } else {
      setArtists(defaultArtists)
      setArtist('')
    }
    notLoading()
  }

  useEffect(() => {
    updateArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  useEffect(() => {
    notLoading()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="data flex flex-col justify-center items-center w-full">
      <h3 className="text-4xl my-10 capitalize font-bold">
        {!isLoading && (query == null || query?.trim() == '') ?
          "Artistas sugeridos:"
          :
          artist
        }
      </h3>
      {isLoading && query !== null ? (
        <div className="artists">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <ArtistSkeleton key={index} />
            ))}
        </div>
      ) : artists.length > 0 ? (
        <div className="artists">
          {artists.map((artist: Artist, index) => (
            <ArtistItem artist={artist} key={index} />
          ))}
        </div>
      ) :
        query?.trim() === '' || query == null ?
          (<p className='text-2xl mt-10'>Hacé una búsqueda!</p>)
          :
          (<p className='text-2xl mt-10'>No se encontraron artistas</p>)

      }
    </div>
  )
}
