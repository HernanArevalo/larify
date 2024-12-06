import { NextResponse } from 'next/server';
import { Item } from "@/interfaces";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get('query');

  if (!query) {
    return NextResponse.json({ message: "Query parameter is required" }, { status: 400 });
  }

  const apiUrl = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=artists&offset=0&limit=5&numberOfTopResults=5`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
      'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST || '',
    },
  };

  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    const newArtists = data.artists.items.map((artist: Item) => ({
      name: artist.data.profile.name,
      picture:
        artist.data.visuals.avatarImage?.sources[1].url ||
        'https://res.cloudinary.com/dabmixcta/image/upload/v1733344111/kihhrdj6lyp6ubekaekd.png',
    }));

    return NextResponse.json(newArtists);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }
}
