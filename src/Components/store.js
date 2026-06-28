import {configureStore} from '@reduxjs/toolkit'
import profileUserSlice from "./slices/profileSlice.js"
import cartSlice from "./slices/cartSlice.js"
export const store= configureStore({
    reducer:{
profile:profileUserSlice,
cart:cartSlice
    }
})

// 1. create store
// 2.to provide the store
// 3. Ceation of slices for our app amd providing those slice to the store