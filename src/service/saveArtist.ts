import { Artist } from "@/interfaces";
import { addDoc, collection } from 'firebase/firestore/lite';
import { FirebaseDB } from '@/config/firebase'
import { getGuests } from "./getGuests";

interface Props{
  artist: Artist,
  name: string
}
export const saveArtist = async({artist, name}: Props) => {
  try {

    const registeredArtists = await getGuests();
    const isRegistered = registeredArtists.find(doc => doc.artist.id == artist.id)

    if (isRegistered) {
      return{
        ok: false,
        message: 'Artista ya registrado :('
      }
    }
    await addDoc(collection(FirebaseDB, "users"), {name, artist});
    return {
      ok:true,
      message:"Artista registrado correctamente!"
    }
  } catch (error) {
    console.error("Error al agregar documento: ", error);
    return {
      ok:false,
      message:'Error! Intentá más tarde.'
    }
  }
}
