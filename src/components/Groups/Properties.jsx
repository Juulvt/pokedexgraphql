import Property from "../Utilities/Property";

const Properties = ({ properties }) => {
    return (
      <>
        <div className='flex flex-row flex-wrap gap-3'>
          {properties.map(property => {
            return <Property key={property.name} name={property.name} value={property.value} />
          })}
        </div>
      </>
    )
  };
  
  export default Properties;