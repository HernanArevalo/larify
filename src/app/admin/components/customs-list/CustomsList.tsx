import { Guest } from '@/interfaces'
import './styles.css'

interface props {
  guests: Guest[]
}

export const CustomsList = ({ guests }: props) => {

  const filteredGuests = Array.from(
    new Map(guests.map(guest => [guest.artist.name, guest])).values()
  );

  return (
    <div className="customs-list-div">
      <h2 className='page-title'>Disfraces Registrados</h2>
      <div className='customs-list'>
        {filteredGuests.map(guest => (
          <div key={guest.artist.id} className='guest'>
            <h4 className='capitalize text-center'>{guest.artist.name}</h4>
          </div>
        ))
        }
      </div>

    </div >
  )
}
