import ImageId from '../Utilities/ImageId'

const ImageBox = ({id}) => {
    return (
      <>
        <div className='w-full h-fit p-5 bg-slate-100 rounded-lg'>
            <ImageId url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} id={id}/>
        </div>
      </>
    )
  };
  
  export default ImageBox;