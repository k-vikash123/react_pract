
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setshowIndex}) => {
    return <div id="cat">
        <div id="head2" onClick={()=>{
                setshowIndex();
            }}>
            <span id="data">{data.title}({data.itemCards.length})</span>
            <span id="down" data-testid="downArrow">&#x25BC;</span>
        </div>
        <div id="body2">
          { showItems && <ItemList items={data.itemCards}/> }
        </div>
    </div>
}

export default RestaurantCategory;