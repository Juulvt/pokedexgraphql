const Ability = ({name}) => {
    return (
      <>
        <div className={`w-fit h-fit px-3 py-2 rounded-lg font-bold border-2 border-zinc-500`}>
            {name}
        </div>
      </>
    )
  };
  
  export default Ability;