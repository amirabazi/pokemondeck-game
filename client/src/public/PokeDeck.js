const Poke = () => {
  
  let pokemonContent;
  const createDigits = () => {
  pokemonContent = [];
  let randomNuber = Math.floor(Math.random() * (1 + 300));
  console.log(randomNuber);
  pokemonContent.push(
    <div className="img-wraper" key={randomNuber}>
      <img alt='poke-img'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/620b6da2dbf05241d1c93ceffac5e6bc6da05e74/sprites/pokemon/other/dream-world/${randomNuber}.svg`}
      />
      <p>RandomPoke {randomNuber}</p>
    </div>
  );    
    console.log(pokemonContent);
  };


  return (
    <div className='pokeWrap'>
      <button onClick={createDigits}>NEW POKEMON</button>   
      {pokemonContent}
    </div>
  )
};
export default Poke;
