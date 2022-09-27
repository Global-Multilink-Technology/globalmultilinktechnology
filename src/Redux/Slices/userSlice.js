import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [],
  product: [],
  orderID:-1,
  cart:[],
  load:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loadmath: (state, action) => {
      state.load = action.payload
    },
    storeproduct: (state, action) => {
      state.product =[action.payload] 
    },
    storedata: (state, action) => {
      state.user =[action.payload] 
    },
    addToCart: (state, action) => {
      state.cart =[...state.cart,action.payload] 
    },
    setOrderID: (state, action) => {
      state.orderID =[action.payload] 
    },
    removeFromCart: (state,action) => {
      state.cart = state.cart.filter((item)=>item.id!==action.payload.id)
      //state.cartTotal -=(action.payload.price * state.Qty[action.payload.id]);
    },
    increaseCartQuantity: (state,action) => {   
      state.Qty[action.payload.id] += 1;  
      //state.cartTotal +=action.payload.price;
    },
    decreaseCartQuantity: (state,action) => {   
      state.Qty[action.payload.id] -= 1;  
      //state.cartTotal -=action.payload.price;
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeFromCart, increaseCartQuantity,decreaseCartQuantity, storedata,storeproduct,setOrderID,addToCart,loadmath} = counterSlice.actions

export default counterSlice.reducer