'use client';
import { useState } from 'react';
import { Artist } from '@/interfaces';
import Image from 'next/image';
import './styles.css';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { Divider } from '@/components';

import { Toast } from '@/utils';
import { saveArtist } from '@/service';
interface Props {
  artist: Artist;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none'
};

export const ArtistItem = ({ artist }: Props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const onRegister = async(e:React.FormEvent) => {
    e.preventDefault();

    const resp = await saveArtist({artist,name})

    Toast({
      title:resp.message, 
      icon: resp.ok? 'success':'error'
    });
    handleClose()
  }

  return (
    <>
      <div className="artist" onClick={handleOpen}>
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        disableEnforceFocus
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="artist-expanded" onClick={handleOpen}>
              <div className="artist-img-expanded text-white">
                <Image
                  src={artist.picture}
                  alt={artist.name}
                  width={300}
                  height={300}
                />
              </div>
              <h5>{artist.name}</h5>
              <Divider />
              <form onSubmit={onRegister} className="register-form">
                <label>Registrar cantante:</label>
                <input type="text" 
                       placeholder='Tu nombre' 
                       value={name} 
                       onChange={e=>{setName(e.target.value)}}
                       required
                />
                <button type='submit'>Registrar</button>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
