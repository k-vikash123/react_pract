import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({items}) => {
   const dispatch = useDispatch();
  //  dispatch(() => addItem("pizza"));

   const handleAddItem = (item) => {
      dispatch(addItem(item));
   }

  return <div id="iteming">
    {items.map((item) => {
     return <div key={item.card.info.id}>
        <div>
          <span id="nms">{item.card.info.name} - Rs</span>
          <span id="prc">{item.card.info.price/100}</span>
        </div>
          <p id="dis">{item.card.info.description}</p>
          <button id="btn4" onClick={() => handleAddItem(item) }>ADD</button>
        </div>
    })}
  </div>
   
}

export default ItemList;