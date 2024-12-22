import { Guest } from '@/interfaces'
import './styles.css'
import Image from 'next/image';

interface props {
  guests: Guest[]
}

export const CustomsList = ({ guests }: props) => {

  const filteredGuests = Array.from(
    new Map(guests.map(guest => [guest.artist.name, guest])).values()
  );

  return (
    <div className="customs-list-div">
      <h2 className='page-title'>Invitados confirmados</h2>
      <div className='customs-list'>
        {filteredGuests.map(guest => (
          <div className="artist" key={guest.artist.id}>
            <div className="artist-img">
              <Image
                src={guest.artist.picture}
                alt={guest.artist.name}
                width={160}
                height={160}
              />
            </div>
            <h5>{guest.artist.name}</h5>
            <h6>{guest.name}</h6>
          </div>
        ))
        }
      </div>

    </div >
  )
}
