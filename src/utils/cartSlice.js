import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        item : []
    },
    reducers : {
        addItem : (state,action) => {                           
            state.item.push(action.payload);
            console.log(current(state));
        },
        clearCart : (state) => {
            state.item.length = 0;
            // return {item : []}
        }
    }
})

export const { addItem,clearCart } = cartSlice.actions;

export default cartSlice.reducer;