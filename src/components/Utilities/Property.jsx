const Property = ({name, value}) => {
    return (
      <>
        <div className='basis-36 flex-1 flex flex-col gap-1'>
            <h4 className="font-semibold">{name}</h4>
            <div className="py-1 px-2 bg-slate-100 rounded-lg">{value}</div>
        </div>
      </>
    )
  };
  
  export default Property;