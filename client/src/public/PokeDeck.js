const Poke = () => {
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i <= 50; i++) {
      digits.push(
        <div className="img-wraper" key={i}>
          <img alt='poke-img'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/620b6da2dbf05241d1c93ceffac5e6bc6da05e74/sprites/pokemon/other/dream-world/${i}.svg`}
          />
          <p>RandomPoke {i}</p>
        </div>
      );
    }
    return digits;
  };
  return <div className='pokeWrap'>{createDigits()}</div>;
};
export default Poke;
