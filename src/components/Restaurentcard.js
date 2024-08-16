import React from 'react'
import  { useState, useEffect } from 'react';
import { RESTAURANT_IMAGES } from '../utils/cdnlinks';


const Restaurentcard = ({resData,data}) => {
  console.log(resData?.info)
  const {cloudinaryImageId,name,cuisines,avgRating,sla} = resData?.info || {}
  // const [originalText, setOriginalText] = useState(name);
  const [trimmedText, setTrimmedText] = useState(name);
  const maxLength = 20;

  useEffect(() => {
    if ( name && name.length > maxLength) {
      // Trim the text and append '...' 
      setTrimmedText(name.substring(0, maxLength - 3) + '...');
    } else {
      setTrimmedText(name);
    }
  }, [name]);

  const trimmedCuisines = cuisines ? cuisines.slice(0,3).join(','): '';

  return ( 
      <div className="res-card m-2  ease-in-out duration-200 hover:scale-105 ">
        <div className='res-wrapper relative'>
        <img className='h-[169.76px] w-[253.84px] rounded-2xl z-10' src={RESTAURANT_IMAGES + cloudinaryImageId} alt="restaurent" />
          <div className="bg-gradient-to-b from-transparent to-gray-950 absolute inset-0 rounded-b-2xl top-[90px] h-20 w-[253.84px]"></div>
          {(data?.header)&&(data?.subHeader)?<div className="label-data flex absolute gap-1 top-[132px] left-3 text-white text-xl font-extrabold">
        <p>{data?.header??null}</p>
        <p>{data?.subHeader??null}</p>
        </div>:null}
        </div>
  
        <h3 className='w-[241px] font-bold text-lg text-[rgba(2, 6, 12, 0.75)] mt-2 px-2'>{trimmedText}</h3>
        <h5 className='px-2 font-medium text-[rgba(2, 6, 12, 0.75)] text-md'>{trimmedCuisines}</h5>
        <h5 className='px-2 text-[rgba(2, 6, 12, 0.75)]'><span className='text-green-800 text-xl'>★</span>{avgRating}</h5>
        <h5 className='px-2 text-[rgba(2, 6, 12, 0.75)]'>{sla?.deliveryTime} minutes</h5>
      </div>
  )
}


export const withPromotedLabel = (Restaurentcard) =>{
  return (props)=>{
    return(
      <div>
        <label>{props.resData.aggregatedDiscountInfoV3}</label>
       <Restaurentcard {...props}/>
      </div>
    )
  }
}

export default Restaurentcard;
