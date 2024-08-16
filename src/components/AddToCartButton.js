import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, incrementSameItem, decrementSameItem } from "../utils/CartSlice";

const AddToCartButton = ({item})=>{
    

    const dispatch = useDispatch()
    
    const currentItem = useSelector(store=>store.cart.items.find(cartItem=>cartItem.card.info.id === item.card.info.id)?.quantity || 0)
    

    console.log(currentItem)





    const handleAdd = (item)=>{
        dispatch(addItems(item))
    }

    const increment =(item)=>{
        dispatch(incrementSameItem(item))
    }

    const decrement =(item)=>{
        dispatch(decrementSameItem(item))
    }
    
    return(
        <div className="h-[36px] w-[96px] flex justify-between font-bold shadow-md rounded-md border">
            
           { currentItem ? <><button onClick={()=>decrement(item)} className=" h-[34px] w-[30px] pb-2  text-xl text-green-600 font-bold hover:bg-gray-200 rounded-l-md ">−</button>
            <span className="m-1 text-green-600">{currentItem}</span>
            <button onClick={()=>increment(item)} className=" h-[34px] w-[30px] pb-2  hover:bg-gray-200 text-xl text-green-600 font-bold  rounded-r-md ">+</button> </> : <button  onClick={()=>handleAdd(item)} className="h-full w-full text-green-600">ADD</button> }
            
        </div>
    )
}
 
export default AddToCartButton;