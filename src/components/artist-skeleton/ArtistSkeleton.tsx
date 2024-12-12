import Image from 'next/image'
import './styles.css'
export const ArtistSkeleton = () => {
  return (
    <div className="artist skeleton">
      <Image    
                  className='skeleton-img'
                  src="https://i.scdn.co/image/ab6761610000f1788683dd0698fb59ad7039a46f"
                  alt="default img"
                  width={160}
                  height={160}
                />
      <div className="skeleton-line"></div>
    </div>
  )
}