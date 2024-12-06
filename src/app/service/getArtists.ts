
export const getArtists = async (query: string | null) => {
  const url = `/api/artists?query=${query}`;
  if (query !== '' && query !== null) {
    try {
      const response = await fetch(url).then((res) => res.json());

      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  } else {
    return [];
  }
};
