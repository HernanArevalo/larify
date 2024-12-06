import { Suspense } from "react";
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
        <Suspense fallback={
          <div className="text-center mt-10 text-2xl">Loading artists...</div>
        }>
          <ArtistsList />
        </Suspense>
      </main>

      <footer></footer>
    </div>
  );
}
