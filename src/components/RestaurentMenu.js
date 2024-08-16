import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestItemCategory from "./RestItemCategory";
import VegOnly from "./VegOnly";


const RestaurentMenu=()=>{

    const {resId} = useParams();

    const [showVegOnly, setShowVegOnly] = useState(false);

    const [showIndex,setShowIndex] = useState(0);

    const handletoggle = () =>{
        setShowVegOnly(!showVegOnly);
    }

    //this is a custom hook to make the api call and fetch the data and display the data in restaurentmenu component using the usestate hook and resid, by making this we can achive code reusability ,can write modular code and with less logic.
    const resMenu  = useRestaurentMenu(resId);


    if (resMenu===null){
        return (
            <div className="shimmer-body mx-44 mt-24">
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

   const {name, cuisines =[], costForTwoMessage,avgRating,totalRatingsString} = resMenu?.cards[2]?.card?.card?.info??{};
   const {enrichedText}=resMenu?.cards[2]?.card?.card?.info?.expectationNotifiers[0]??{};
   const menuSections=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//    const menuCategory=menuSections.filter((c)=>{
//       return (c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//    })

   const menuCategory = menuSections.filter((c) => {
    return c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
       showVegOnly ? c.card?.card?.itemCards?.filter(item => item?.card?.info?.itemAttribute?.vegClassifier === 'VEG'): null;
});


    return(
        <>
        <div className="w-6/12 mx-auto mt-20  rounded-md">
            <div className="flex justify-between">
            <div className=" pt-2">
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-[#7E808C] text-sm">{cuisines.join(', ')} - {costForTwoMessage}</p>
            <span className="flex mt-2">
            <h5 className="text-orange-600 font-extrabold text-xl">ⓘ</h5>
            <h5 className=" text-[#7E808C] text-sm  my-auto mx-1">{enrichedText}</h5>
            </span>
            </div>
            <div className="my-auto mx-6 text-center p-2 cursor-pointer">
                <div className="border-1 rounded-md shadow-sm">
                    <h4 className="text-green-600 text-sm font-bold  p-[2px]"><span className="text-lg">★</span>{' '}{avgRating}</h4>
                    <p className="border-b  mx-2"></p>
                    <h5 className="text-[9px] text-[#8b8d97] font-bold py-[10px] px-1">{totalRatingsString}</h5>
                </div>
            </div>
            </div>

            {/* VEG ONLY */}

            <div>
                <VegOnly handletoggle={handletoggle} showVegOnly={showVegOnly}/>
            </div>

            <div className="border border-b-0  my-4 border-gray-400"></div>
           
           {
            menuCategory.filter((item) => showVegOnly || item?.card?.card?.itemCards?.card?.info?.isVeg === 1 || item?.card?.card?.itemCards.length !== 0).map((category,index)=>{
                return(
                 <RestItemCategory key={category?.card?.card?.title} category={category?.card?.card} showItems={index===showIndex && true } showVegOnly={showVegOnly} setShowIndex={()=>setShowIndex(index)}/>
                )
            })
           }

        </div>
























        




        </>
    )
}

export default RestaurentMenu;