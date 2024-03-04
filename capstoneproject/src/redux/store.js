import { configureStore } from "@reduxjs/toolkit"

//api 
import { apiSlice } from "./api";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
},
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
    
});

export default store;