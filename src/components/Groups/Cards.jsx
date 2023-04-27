import Card from '../Utilities/Card'

const Cards = ({pokemonList}) => {
    return (
      <>
        <div className='flex flex-row flex-wrap gap-3'>
            {pokemonList.map(pokemon => {
                return <Card key={"pokemon"+pokemon.id} pokemon={pokemon}/>
            })}
        </div>
      </>
    )
  };
  
  export default Cards;