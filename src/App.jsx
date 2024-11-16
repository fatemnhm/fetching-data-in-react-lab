import React, { useState, useEffect } from 'react';
import { getStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getStarships();
        setStarships(data);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <main>
      <StarshipSearch onSearch={setSearch} />
      {starships.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <StarshipList starships={starships} search={search} />
      )}
    </main>
  );
};

export default App;