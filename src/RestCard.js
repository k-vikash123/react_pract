
const Restcard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,totalFee} = resData;
    return <div id="restaurant">
     <img className="restro-logo" alt="restaurant image" 
    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
     <h2>{name}</h2>
     <h3>{cuisines.join(", ")}</h3>
     <p>{avgRating}</p>
     <p>{deliveryTime}</p>
     <p>{totalFee}</p>
    </div>
  }

  export default Restcard;