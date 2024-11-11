import { useState } from 'react';

const StarshipSearch = ({ setsearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setsearch(input);
  };

  return (
    <section>
      <h2>Search Starships</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter starship name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;








