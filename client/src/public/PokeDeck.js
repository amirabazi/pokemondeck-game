import { useState } from "react";

const Poke = () => {

    const [getPokemonContent, setPokemonContent] = useState([]);

    const createDigits = () => {
        let randomNuber = Math.floor(Math.random() * (1 + 300));
        setPokemonContent(
            [
                ...getPokemonContent,
                randomNuber,
            ],
        );
    };

    return (
        <div className='pokeWrap'>
            <button onClick={createDigits}>NEW POKEMON</button>
            {
                getPokemonContent.map((i) => {
                    return (
                        <div className="img-wraper" key={i}>
                        <img alt='poke-img'
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/620b6da2dbf05241d1c93ceffac5e6bc6da05e74/sprites/pokemon/other/dream-world/${i}.svg`}
                        />
                        <p>RandomPoke {i}</p>
                        </div>
                    );
                })
            }
        </div>
    )
};
export default Poke;