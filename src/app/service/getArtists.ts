import { Item } from '../interfaces';

export const getArtists = async (query: string | null) => {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=artists&offset=0&limit=5&numberOfTopResults=5`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
      'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST || '',
    },
  };

  if (query !== '' && query !== null) {
    try {
      const response = await fetch(url, options).then((res) => res.json());

      const newArtists = response.artists.items.map((artist: Item) => {
        return {
          name: artist.data.profile.name,
          picture:
            artist.data.visuals.avatarImage?.sources[1].url ||
            'https://res.cloudinary.com/dabmixcta/image/upload/v1733344111/kihhrdj6lyp6ubekaekd.png',
        };
      });
      return newArtists;
    } catch (error) {
      console.error(error);
      return [];
    }
  } else {
    return [];
  }
};
