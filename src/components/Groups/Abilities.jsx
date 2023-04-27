import Ability from '../Utilities/Ability'

const Abilities = ({abilities}) => {
    return (
      <>
        <div className='flex-1 basis-48'>
          <h2 className="font-bold mb-2">Abilities</h2>
          <div className='flex flex-row gap-3'>
            {abilities.map(ability => {
              return <Ability key={ability.pokemon_v2_ability.name} name={ability.pokemon_v2_ability.name} />
            })}
          </div>
        </div>
      </>
    )
  };
  
  export default Abilities;