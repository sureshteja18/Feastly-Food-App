import React, { useContext, useEffect } from 'react'
import Restaurentcard , {withPromotedLabel} from './Restaurentcard';
// import {restaurentData} from '../utils/restaurentdata'
import { useState } from 'react';
import Shimmer from './Shimmer';
import myContext from '../utils/context';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
    const {searchInput} = useContext(myContext);
    const [restaurants,setRestaurants]=useState([]);
   const [ratedRestaurents,setRatedRestaurents]=useState([]);
   const [filterRemove,setFilterRemove] =useState('Top Rated Restaurents');
   const onlineStatus = useOnlineStatus();

   const RestaurantCardPromoted = withPromotedLabel(Restaurentcard)
   const handleTopRated= () =>{
        
        if(filterRemove==='Top Rated Restaurents'){
            const filteredData = ratedRestaurents.filter((res)=>{
                return res.info.avgRating>4
             })
             setRatedRestaurents(filteredData)
             setFilterRemove('Remove Filter')
        }else{
            setFilterRemove('Top Rated Restaurents')
            setRatedRestaurents(restaurants)
        }
   }
 

   useEffect(()=>{
    fetchData()
   },[])

   useEffect(()=>{
        if(typeof searchInput !== 'string' ){
            setRatedRestaurents(restaurants)
        }
        else if(!searchInput || searchInput.trim()===""){
            setRatedRestaurents(restaurants)
        }
        else{
            const filterdSearch = restaurants.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchInput.toLowerCase())
              })
              setRatedRestaurents(filterdSearch)
        }

   },[searchInput,restaurants])
   
   const fetchData= async()=>{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.482579&lng=78.30527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
 
     const newData = await data.json(data)

     setRatedRestaurents(newData?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants)
     setRestaurants(newData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
   }
    
//    console.log(restaurants);


    if(onlineStatus===false){
        return(
            <h1>You are Offline Once check your Internet Connection.</h1>
        )
    }

   if (ratedRestaurents.length===0){
    return (
        <div className="shimmer-body mx-44 mt-20">
    <div className="shimmer-container flex justify-between flex-wrap">
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/> 
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/> 
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
        </div>
    </div>    
        
    )

   }

  return (
    <>
    <div className="app-body mx-44">    
        <div className='top-rated text-right m-4'>
            <button className='p-2 rounded-md shadow-md bg-orange-400 mr-4 text-[#3d4152] font-medium hover:text-white' onClick={handleTopRated}>{filterRemove}</button>
        </div>
        <div className="res-container grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
         {
            ratedRestaurents.map((restaurent) => restaurent.info.aggregatedDiscountInfoV3 ?<Link className='res-link' key={restaurent.info.id} to={'/restaurents/'+ restaurent.info.id}><RestaurantCardPromoted resData={restaurent} data={restaurent.info.aggregatedDiscountInfoV3} /></Link> : <Link className='res-link' key={restaurent.info.id} to={'/restaurents/'+ restaurent.info.id}><Restaurentcard  resData={restaurent.info}/></Link>)
         }
        </div>       
    </div>
    </>
  )
}   

export default Body