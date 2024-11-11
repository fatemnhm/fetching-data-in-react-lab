const BASE_URL = 'https://swapi.dev/api/starships/';

const getStarships = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching starships:', error);
  }
};


export { getStarships};