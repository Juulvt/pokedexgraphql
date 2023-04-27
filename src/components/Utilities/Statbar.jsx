const Statbar = ({name, value}) => {
    return (
      <>
        <div key={name} className='flex flex-col h-full'>
          <div className="flex-1 w-20 relative">
            <div className="absolute w-full left-0 bottom-0 bg-blue-500" style={{height: value + '%'}}></div>
          </div>
          <div className="text-center pt-3">
            {name}
          </div>
        </div>
      </>
    )
  };
  
  export default Statbar;