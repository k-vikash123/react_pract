
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Restcard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo} = resData;
    return <div id="restaurant" data-testid="restcardid">
     <img className="restro-logo" alt="restaurant image" 
    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
     <h2>{name}</h2>
     <p>{cuisines.join(", ")}</p>
     <p>{avgRating}</p>
     <p>{sla.deliveryTime} mins</p>
     <p>{costForTwo}</p>
    </div>
  }

  export default Restcard;