import { configureStore } from "@reduxjs/toolkit"

//api 
import { apiSlice } from "./api";
import itemsCreateSlice from "./cartslice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: itemsCreateSlice.reducer,
},
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
    
});

export default store;