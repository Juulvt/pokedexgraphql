import React from 'react';
import Cards from '../components/Groups/Cards'
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';
import { useLocation } from "react-router-dom";
import Pagination from '../components/Utilities/Pagination';


const itemsPerPage = 20;
const POKEMON_QUERY = gql`
  query Pokemon
  {
    pokemon:pokemon_v2_pokemon {
    id
    name
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
  }`;

const Pokedex = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page') != undefined ? parseInt(queryParams.get('page'),10):1;
  const { loading, error, data } = useQuery(POKEMON_QUERY, {
    variables: { offset:0, limit:itemsPerPage },
  });
  const [ ready, setReady ] = useState(false);
  const [ pokemon, setPokemon ] = useState();

  useEffect(() => {
      if(loading === false && data){
        console.log(data);
          setPokemon(data.pokemon);
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
  return (<div className="w-full h-fit container mx-auto my-8" id="pokedex">
        <Cards key={'cards'} limit={page * itemsPerPage} offset={(itemsPerPage * (page - 1))} pokemonList={pokemon}/>
        <Pagination key={'pagination'} limit={page * itemsPerPage} offset={(itemsPerPage * (page - 1))} page={page} total={pokemon.length}/>
    </div>);
  };
  
  export default Pokedex;