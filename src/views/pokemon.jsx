import ImageBox from '../components/Groups/ImageBox';
import Properties from '../components/Groups/Properties';
import Types from '../components/Groups/Types';
import Abilities from '../components/Groups/Abilities';
import Entry from '../components/Utilities/Entry';
import Statsbars from '../components/Groups/Statsbars';
import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';

const POKEMON_QUERY_BY_ID = gql`
  query Pokemon($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq:$id}}) {
      id
      name
      pokemon_species_id
      base_experience
      height
      pokemon_v2_pokemonabilities {
        ability_id
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        name
        pokemon_v2_pokemonspeciesflavortexts {
          flavor_text
        }
      }
    }
  }
`;

const Pokemon = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(POKEMON_QUERY_BY_ID, {
      variables: { id },
    });
    const [ ready, setReady ] = useState(false);
    const [ pokemon, setPokemon ] = useState();
    const [ properties, setProperties ] = useState();

    useEffect(() => {
        if(loading === false && data){
            setPokemon(data.pokemon_v2_pokemon[0]);
            let props = [
              {name:'height', value:data.pokemon_v2_pokemon[0].height},
              {name:'base_experience', value:data.pokemon_v2_pokemon[0].base_experience}
            ]
            setProperties(props);
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
    return (<div className="w-full h-fit container mx-auto my-8" id="pokemon">
      <div className="w-full flex flex-col md:flex-row gap-5 justify-between bg-white rounded-lg overflow-hidden">
            <div className="flex flex-col gap-5 basis-1/4 flex-1 p-5">
                <ImageBox key={'imagebox'} id={pokemon.id} sprites={pokemon.pokemon_v2_pokemonsprites[0].sprites}/>
                <Properties key={'properties'} properties={properties}/>
            </div>
            <div className="flex flex-col gap-5 basis-3/5 flex-1 p-5">
              <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-4xl'>{pokemon.name}</h1>
                <Types key={'types'} types={pokemon.pokemon_v2_pokemontypes} />
                <Entry key={'entry'} entry={pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[2].flavor_text}/>
              </div>
              <div className='flex flex-row flex-wrap gap-5 justify-between'>
                  <Abilities key={'abilities'} abilities={pokemon.pokemon_v2_pokemonabilities}/>
              </div>
              <Statsbars key={'statsbars'} stats={pokemon.pokemon_v2_pokemonstats}/>
            </div>
      </div>
  </div>);
  };
  
  export default Pokemon;