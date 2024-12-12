import { NextResponse } from 'next/server';
import { getSpotifyToken } from "@/service";
import { Item } from "@/interfaces";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get('query');

  if (!query) {
    return NextResponse.json({ message: "Query parameter is required" }, { status: 400 });
  }

  const apiUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist&limit=5`;

  try {
    const token = await getSpotifyToken();

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Error fetching from Spotify API:', await response.json());
      return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
    }

    const data = await response.json();

    if (data) {
    const newArtists = data.artists.items.map((artist: Item) => ({
      name: artist.name,
      picture:
        artist.images[0]?.url ||
        'https://i.scdn.co/image/ab6761610000f1788683dd0698fb59ad7039a46f',
      id: artist.id,
      genres: artist.genres
    }));
    return NextResponse.json(newArtists);
  }else return NextResponse.json([])
  } catch (error) {
    console.error('Error fetching artists:', error);
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }
}
