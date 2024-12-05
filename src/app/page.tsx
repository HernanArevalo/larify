import { FaSpotify } from "react-icons/fa";
import { ArtistsList, SearchForm } from "@/components";

export default function Home() {

  return (
    <div>
      <main>
        <div className="logo">
          <h1>Larify</h1>
          <FaSpotify size={76} color="rgb(255, 94, 74)" />
        </div>

        <SearchForm />
        <ArtistsList />
      </main>

      <footer></footer>
    </div>
  );
}
