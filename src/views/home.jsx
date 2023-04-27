import { Link } from "react-router-dom";
import Cards from '../components/Groups/Cards'
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';

const POKEMON_QUERY = gql`
  query Pokemon {
      pokemon_v2_pokemon(where: {id: {_in: [1, 4, 7, 25]}}) {
        id
        name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
  }`;

const Home = () => {
  const { loading, error, data } = useQuery(POKEMON_QUERY);
  const [ ready, setReady ] = useState(false);
  const [ pokemon, setPokemon ] = useState();

  useEffect(() => {
      if(loading === false && data){
        console.log(data);
          setPokemon(data.pokemon_v2_pokemon);
          setReady(true);
      }
  }, [loading, data]);

  if (loading || !ready) return (<div className="w-full h-fit container mx-auto my-8 text-center" id="pokedex">
    <div
        className="m-12 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
    </div>
    <div>Loading...</div>
  </div>);
  if (error) return <pre>{error.message}</pre>;
  return (<div className="w-full mb-8" id="pokedex">
    <div className="w-full py-8 bg-slate-100">
      <div className="h-96 min-h-fit container mx-auto">
        <div className="flex flex-row flex-wrap-reverse gap-8 h-full">
            <div className="flex-1 basis-80 flex flex-col justify-center gap-3">
                <h2 className="font-bold text-3xl">Find everything about pokemon!</h2>
                <p>Everything you want to know about pokemon on one site</p>
                <Link className="mt-4 py-2 px-4 rounded-lg bg-amber-300 w-fit font-bold" to="/pokedex">Find Pokemon</Link>
            </div>
            <div className="hidden md:block h-full flex-1 basis-80">
              <img className="h-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            </div>
        </div>
      </div>
    </div>
    <div className="-mt-6 container mx-auto">
      <div className="bg-white p-5 rounded">
        <h2 className="font-bold text-2xl">Popular pokemon</h2>
        <Cards pokemonList={pokemon}/>
      </div>
    </div>
</div>);
};
  
  export default Home;