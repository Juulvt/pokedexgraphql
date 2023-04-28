import Card from '../Utilities/Card'

const Cards = ({pokemonList, limit, offset}) => {
    return (
      <>
        {pokemonList.slice(offset,limit).length == 0
        ? <div className='flex justify-center mb-8'>
            <span>No pokemon found</span>
          </div>
        : <div className='flex flex-row flex-wrap gap-3'>
                {limit != null && offset != null &&
                    pokemonList.slice(offset, limit).map(pokemon => {
                        return <Card key={"pokemon"+pokemon.id} pokemon={pokemon}/>
                    })
                }
                {limit == null && offset == null &&
                    pokemonList.map(pokemon => {
                        return <Card key={"pokemon"+pokemon.id} pokemon={pokemon}/>
                    })
                }
            </div>
        }
      </>
    )
  };
  
  export default Cards;