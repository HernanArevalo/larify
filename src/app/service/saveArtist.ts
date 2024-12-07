import { Artist } from "@/interfaces";
import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '@/config/firebase'

interface Props{
  artist: Artist,
  name: string
}
export const saveArtist = async({artist, name}: Props) => {

  try {
    const usersCollection = collection(FirebaseDB, "users");
    const querySnapshot = await getDocs(usersCollection);

    const registeredArtists = querySnapshot.docs.map(doc=>{return doc.data()})

    const isRegistered = registeredArtists.find(doc => doc.artist.id == artist.id)

    if (isRegistered) {
      return{
        ok: false,
        message: 'Artist already taken :('
      }
    }
    await addDoc(collection(FirebaseDB, "users"), {name, artist});
    return {
      ok:true,
      message:"Successful artist registration!"
    }
  } catch (error) {
    console.error("Error al agregar documento: ", error);
    return {
      ok:false,
      message:'Error! Try again later.'
    }
  }
}
