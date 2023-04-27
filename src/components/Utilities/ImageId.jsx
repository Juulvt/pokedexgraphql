const imageStyle = {
    width: "400%",
    maxwidth: "unset"
};

const ImageID = ({url, id}) => {
    return (
      <>
        <div className="flex flex-col gap-3 items-center">
            <div className="w-full"><img style={imageStyle} className="w-full" src={url}></img></div>
            <div className="inline-block fit-content font-semibold">#{id}</div>
        </div>
      </>
    )
  };
  
  export default ImageID;