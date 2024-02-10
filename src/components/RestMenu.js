import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemList";
import RestaurantCategory from "./RestaurantCat";

const RestMenu = () => {
     
    const [restMenu,setRestMenu] = useState([]);
    const {resId} = useParams();

    const [showIndex,setshowIndex] = useState(null);

    useEffect(()=>{
        getRestMenu();
    },[]);

    async function getRestMenu() {
        let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId);
        let json = await data.json();
        let restaurant = json?.data;
        setRestMenu(restaurant);
    }
     if(restMenu.length===0){
        return <Shimmer/>
    }
    
    const { name,cuisines,costForTwoMessage } = restMenu?.cards[0]?.card?.card?.info;

    const {itemCards} = restMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = restMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x)=>{
        return x.card.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    })
    
        // let items = restMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      
    return <div id="menu">
         <h1>{name}</h1>
         <p>{cuisines.join(',')}</p>
         {categories.map((x,index)=>{
            return <RestaurantCategory 
            key={x.card.card.title} 
            data={x.card.card}
            showItems={index === showIndex && true} 
            setshowIndex={()=>setshowIndex(index)}/>
         })}
      </div>
    }


export default RestMenu;