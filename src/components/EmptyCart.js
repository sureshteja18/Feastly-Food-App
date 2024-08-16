import React from 'react'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className='flex flex-col text-slate-700 justify-center items-center'>
        <h1 className='font-bold text-xl'>Your Cart is Empty</h1>
        <img className='h-56 w-60 m-4' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" alt="img" />
       <h3 className='text-slate-500 p-2 '>Good food is always cooking! Go ahead, <br/><span>order some yummy items from the menu.</span></h3>
       <Link to ="/"><button className='m-2 bg-orange-400 p-2 pl-1 rounded-md font-bold shadow-md hover:text-white'>See Restaurents Near You</button></Link>
    </div>
  )
}

export default EmptyCart;