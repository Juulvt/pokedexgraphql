import Statbar from '../Utilities/Statbar';

const Statsbars = ({stats}) => {
    function nameSwitch(name) {
      switch(name) {
        case 'hp':
          return 'HP';
        case 'attack':
          return 'Atk';
        case 'defense':
          return 'Def';
        case 'special-attack':
          return 'SpA';
        case 'special-defense':
          return 'SpD';
        case 'speed':
            return 'Spd';
        default:
          return name;
      }
    };

    function switchPercentage(name, value) {
      console.log("name" + name);
      switch(name) {
        case 'hp':
          return (value / 255) * 100;
        case 'attack':
          return (value / 505) * 100;
        case 'defense':
          return (value / 230) * 100;
        case 'special-attack':
          return (value / 175) * 100;
        case 'special-defense':
          return (value / 230) * 100;
        case 'speed':
            return (value / 200) * 100;
        default:
          return value;
      }
    }

    return (
      <>
        <div key={stats[0].name} className='flex flex-row gap-3 h-40 '>
          {stats.map(stat => {
            return(
              <Statbar key={stat.pokemon_v2_stat.name} name={nameSwitch(stat.pokemon_v2_stat.name)} value={switchPercentage(stat.pokemon_v2_stat.name, stat.base_stat)}/>
            )
          })};
        </div>
      </>
    )
  };
  
  export default Statsbars;