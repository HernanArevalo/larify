'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { ArtistSkeleton } from '@/components'
import { Artist } from '@/interfaces'
import { getArtists } from '@/service'
import { larifyStore } from '@/store'

export const ArtistsList = () => {
  const params = useSearchParams();

  const { artist, artists, setArtists, setArtist, loading, isLoading, notLoading } = larifyStore()

  const query = params.get('artist')

  const updateArtists = async () => {
    loading()
    const newArtists = await getArtists(query)
    setArtists(newArtists)
    setArtist(query || '')
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
    <div className="data flex flex-col justify-center items-center">
      <h3 className="text-4xl my-10 capitalize font-bold">
        {artist}
      </h3>
      {isLoading ? (
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
            <div className="artist" key={index}>
              <div className="artist-img">
                <Image
                  src={artist.picture}
                  alt={artist.name}
                  width={160}
                  height={160}
                />
              </div>
              <h5>{artist.name}</h5>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron artistas</p>
      )}
    </div>
  )
}
