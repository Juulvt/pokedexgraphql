import { Link } from "react-router-dom";
import ImageId from './ImageId';

const Card = ({pokemon}) => {
    return (
      <>
        <Link className='flex flex-col flex-1 basis-72 p-5 gap-5 bg-white' to={`/pokedex/${pokemon.id}`}>
            <div className='flex-1 w-full h-fit p-5 bg-slate-100 rounded-lg'>
                <ImageId url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} id={pokemon.id}/>
            </div>
            <div className='flex-none text-center'>
                <h3 className='font-bold'>{pokemon.name}</h3>
            </div>
        </Link>
      </>
    )
  };
  
  export default Card;