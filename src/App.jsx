import './App.css'

import * as getStarships from './services/starshipService.js'

import { useState, useEffect } from 'react';

import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getStarships();
      setStarships(starshipData);
    };
    fetchStarships();
  }, []);

  return (
    <main>
      <h1>Star Wars Starships</h1>
      <StarshipSearch setsearch={setsearch} />
      <StarshipList starships={starships} search={search} />
    </main>
  );
};

export default App;


