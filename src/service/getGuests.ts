import { FirebaseDB } from "@/config/firebase";
import { Guest } from "@/interfaces";
import { collection, getDocs } from "firebase/firestore/lite";

export const getGuests = async(): Promise<Guest[]> =>{
  const usersCollection = collection(FirebaseDB, "users");
  const querySnapshot = await getDocs(usersCollection);

  const registeredArtists = querySnapshot.docs.map(doc=>{return {
    name: doc.data().name,
    artist: doc.data().artist
  }})

  return registeredArtists
}