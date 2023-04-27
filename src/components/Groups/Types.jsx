import Type from '../Utilities/Type'

const Types = ({ types }) => {
  console.log(types);
    return (
      <>
        <div className='flex gap-3 flex-wrap'>
          {types.map(type => {
            return <Type key={type.pokemon_v2_type.name} name={type.pokemon_v2_type.name}/>
          })}
        </div>
      </>
    )
  };
  
  export default Types;