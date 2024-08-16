import React from 'react'
import { useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import AddToCartButton from './AddToCartButton'
import { Link } from 'react-router-dom'
import { clearItems } from '../utils/CartSlice'
import { RESTAURANT_IMAGES } from '../utils/cdnlinks'
import EmptyCart from './EmptyCart'



const Cart = () => {

  
  const cartItems = useSelector((store)=>store.cart.items);

  const memoriesedCartItems = useMemo(()=> cartItems,[cartItems])
  console.log(cartItems)

 

  const dispatch = useDispatch()

  const clearItem =()=>{
    dispatch(clearItems())
  }


  return (
    <div className='m-4 p-4 '>
        {
            cartItems.length>0 ? 
                (<div> 
                 <h1 className=' text-xl pl-80 font-bold'>Cart Items {cartItems.length >0 ? `(${cartItems.length})` : ""}</h1>

<div className=' flex justify-between relative '>
    <div className='w-7/12'>
      {
          memoriesedCartItems.map((item)=>{
             
              const hasAddons = item?.card?.info?.addons && item?.card?.info?.addons.length > 0;
      const hasVariants = item?.card?.info?.variants && item?.card?.info?.variants.variantGroups && 
          item?.card?.info?.variants.variantGroups.length > 0;
      const isCustomisable = hasAddons || hasVariants ? 'customisable' : null;
              return(
                   <div key={item?.card?.info?.id} className="flex justify-between items-center border-b border-slate-200 m-3 p-2">
                   <div className="w-9/12">
                      <div className="flex items-center">
                        {(item?.card?.info?.isVeg === 1 || item?.card?.info?.veg === true) ?<img width="20" height="20" src="https://img.icons8.com/color/48/vegetarian-food-symbol.png" alt="vegetarian-food-symbol"/>: <img width="20" height="20" src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>}


                       <span className="pl-1 font-medium text-xs text-center text-[#ee9c00]"> 
                       {item?.card?.info?.isBestseller === true ? '★ BestSeller': null}</span>
                      </div>
                      
                      <h2 className="font-medium py-1">{item?.card?.info?.name}</h2>
                      <p className="font-normal">{'₹'}{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</p>
                      <p className="text-[#282c3f73] text-xs">{item?.card?.info?.description}</p>
                  </div>
                  <div className="p-4 relative">
                        <img className="h-[96px] w-[118px] rounded-md" src={RESTAURANT_IMAGES + item?.card?.info?.imageId} alt="dish 
                         images" />
                        <div className="absolute top-24 left-[35px] bg-white rounded-md">
                       <AddToCartButton item={item}/>
                       </div>
                        <p className="text-xs text-slate-500 m-2 pl-4 ">{isCustomisable}</p>
                  </div>
                   </div>
                 
              )
          })
      }
    </div>

    <div className='w-4/12 fixed right-1'>
        <div className='w-80 h-60 shadow-md p-1 rounded-md'>
        <div className='flex justify-between p-4'>
        <h1 className=' text-center p-2 font-bold text-gray-600'>Total Cart Amount</h1>
        <button onClick={clearItem} className='bg-orange-400 p-2 mb-1 rounded-md hover:text-white'>clear Cart</button>
        </div>
        <div className='flex justify-between items-center px-4'>
        <h1 className='text-gray-600 font-semibold pl-4 '>Amount To Pay</h1>
        <span className=' text-xl'>-</span>
        <h1 className='font-bold pr-4'>{'₹'}
        {cartItems.reduce((total,item)=> total + ( item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100) * item?.quantity , 0)}</h1>
        </div>
        <span className='border-b-2 block m-4'></span>
         <div className='text-center'><Link to='/'><button className='p-2 bg-orange-400 rounded-md shadow-md hover:text-white'>CheckOut</button></Link></div>
        </div>
        
       </div>
</div>

            </div>): (<EmptyCart/>)
           
        }

    </div>
   

  )
}

export default Cart