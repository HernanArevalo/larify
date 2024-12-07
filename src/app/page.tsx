import { Suspense } from "react";
import { FaSpotify } from "react-icons/fa";
import { ArtistsList, SearchForm } from "@/components";

export default function Home() {
  return (
      <main>
        <div className="logo">
          <h1>Larify</h1>
          <FaSpotify size={76} color="rgb(255, 94, 74)" />
        </div>

        <Suspense fallback={
          <div className="text-center mt-10 text-2xl">Loading artists...</div>
        }>
          <SearchForm />
          <ArtistsList />
        </Suspense>
      </main>
  );
}
