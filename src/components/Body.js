
import Restcard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useResData from "../utils/useResData";

const Body = () => {

  let [newList,setRestlist] = useState([]);
  let [searchList,setSearchList] = useState([]);
  
  useEffect(()=>{
    GetResData();
  },[]);


  const GetResData = async () => {
    let list = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let json = await list.json();
    let rests = json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRestlist(rests);
    setSearchList(rests);
  }

  const onlineStatus = useResData();

  if(onlineStatus === false){
    return <div>
      <h3>Opps You are offline!</h3>
    </div>
  }
  else{
  if(newList.length === 0){
    return <Shimmer/>
  }
  else{
    return <div id="cont">
      <input type="search" id="search" data-testid="searchid"></input>
      <button id="btn" onClick={()=>{
        let text = document.getElementById("search");
        let value = text.value;
        let list = searchList.filter((x)=>{
          return x.info.name.includes(value);
        })
        setRestlist(list);
      }}>Submit</button>
      <div id="body">
        {newList?.map((x) => {
        return  <Link to={"/restaurant/"+x.info.id} key={x.info.id}>
        <Restcard  resData={x.info} />
        </Link>
  })}
      </div>
    </div>
  }
}
}
  export default Body;