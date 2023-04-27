const Type = ({name}) => {
    return (
      <>
        <div className={`w-fit h-fit px-3 py-2 rounded-lg text-white font-bold bg-${name}`}>
          {name}
        </div>
      </>
    )
  };
  
  export default Type;