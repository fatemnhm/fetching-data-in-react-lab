import StarshipCard from './StarshipCard';

const StarshipList = ({ starships, search }) => {
  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>Starship List</h2>
      <ul>
        {filteredStarships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </section>
  );
};


  export default StarshipList