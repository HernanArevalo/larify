'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArtistItem, ArtistSkeleton } from '@/components'
import { getArtists } from '@/service'
import { larifyStore } from '@/store'
import { Artist } from '@/interfaces'

export const ArtistsList = () => {
  const params = useSearchParams();
  const query = params.get('artist')

  const { artist, artists, setArtists, setArtist, loading, isLoading, notLoading } = larifyStore()


  const updateArtists = async () => {
    loading()

    if (query && query.trim() !== '' ) {
      const newArtists = await getArtists(query)
      setArtists(newArtists)
      setArtist(query)
    }else{
      setArtists([])
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
        {artist}
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
            <ArtistItem artist={artist} key={index}/>
          ))}
        </div>
      ) : 
         query?.trim() !== '' ?
        (<p className='text-2xl mt-10'>Hacé una búsqueda!</p>)
        :
        (<p className='text-2xl mt-10'>No se encontraron artistas</p>)
        
      }
    </div>
  )
}
