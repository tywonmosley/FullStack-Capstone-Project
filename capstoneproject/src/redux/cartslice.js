import { createSlice } from "@reduxjs/toolkit";

const itemsCreateSlice = createSlice({
    name:"cart",
    initialState: {
        itemList:[],
        totalQuantity: 0,
        showCart: false,
        changed: false,
    },
    reducer: {
        replaceData(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.itemList = action.payload.itemList;
        },
    addToCart(state, action)  {
        state.changed = true;
        const newItem = action.payload;
        const existingItem = state.itemList.find(
            (item) => item.id === newItem.id
        );
        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
        } else {
            state.itemList.push({
                id: newItem.id,
                price: newItem.price,
                quatity: 1,
                title: newItem.title,
            });
            state.totalQuantity++;
        }
    },
    removeFromCart(state,action) {
        state.changed = true;
        const id = action.payload;

        const existingItem = state.itemList((item)=>item.id === id);
        if(existingItem.quantity === 1) {
            state.itemsList = state.itemsList.filter((item) => item.id !== id);
            state.totalQuantity--;
        } else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
        }
    },
    setShowCart (state) {
        state.showCart = !state.showCart;
    },
    },
});

export const cartActions = itemsCreateSlice.actions;

export default itemsCreateSlice;