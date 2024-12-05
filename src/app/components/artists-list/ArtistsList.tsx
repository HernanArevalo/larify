'use client'
import { Artist } from '@/interfaces'
import { getArtists } from '@/service'
import { larifyStore } from '@/store'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const ArtistsList = () => {
  const params = useSearchParams();

  const { artist, artists, setArtists, setArtist } = larifyStore()

  const query = params.get('artist')

  const updateArtists = async() =>{
    const newArtists = await getArtists(query)
    setArtists(newArtists)
    setArtist(query || '')
  }

  useEffect(() => {
    updateArtists();
  }, [query])

  return (
    <div className="data flex flex-col justify-center items-center">
      <h3 className="text-4xl my-10 capitalize font-bold">
        { artist }
      </h3>
      {artists.length > 0 && (
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
      )}
    </div>
  )
}
