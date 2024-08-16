import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems: (state,action)=>{
            console.log(state.items.id)
            state.items=[...state.items,{...action.payload,quantity:1}]
        },
        incrementSameItem:(state,action)=>{
           
            const itemIndex = state.items.findIndex((item)=>item.card.info.id === action.payload.card.info.id)

           if(itemIndex !== -1){
            // state.items=[...state.items,action.payload]
            state.items[itemIndex].quantity +=1;
           }else{
            const temp = {...action.payload,quantity:1}
            state.items.push(temp)
           }
        },
        decrementSameItem: (state,action)=>{
            const itemIndex = state.items.findIndex((item)=>item.card.info.id === action.payload.card.info.id)

            if(itemIndex !== -1){

                if (state.items[itemIndex].quantity >1) {
                    state.items[itemIndex].quantity -=1
                    
                } else {
                    state.items.splice(itemIndex, 1)
                }
            
            }
            
        },
        clearItems: (state,action)=>{
            state.items = []
        }
    }
})

export const {addItems,incrementSameItem,decrementSameItem,clearItems}= CartSlice.actions;

export default CartSlice.reducer