

import restList from "../utils/resData";
import Restcard from "./RestCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";


const Body = () => {

  let [newList,setRestlist] = useState(restList);
  

  return <div id="cont">
    <input type="search" id="search"></input>
    <button id="btn" onClick={() => {
       let text = document.getElementById("search").value;
       text = text.toLowerCase();
       newList = newList.filter((x) => {
         return x.name.toLowerCase().includes(text);
       })
       setRestlist(newList);
    }}
    >Submit</button>
    <div id="body">
    {newList?.map((x) => {
      return <Restcard key={x.id}  resData={x}/>
    })}
    </div>
    </div>
}
  export default Body;