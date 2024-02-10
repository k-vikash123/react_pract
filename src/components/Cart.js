import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    
    const cartItems = useSelector((store)=> store.cart.item)
    // console.log(cartItems);

    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(clearCart());
    }

    return <div id="cart">
        <h1>Cart</h1>
        <button id="btns" onClick={() => removeItem()}>Clear Cart</button>
        <ItemList items={cartItems} />
    </div>
}

export default Cart;