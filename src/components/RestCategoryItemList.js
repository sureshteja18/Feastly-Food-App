import React, { useState }  from "react";
import { RESTAURANT_IMAGES } from "../utils/cdnlinks";
import Addons from "./Addons";
import AddToCartButton from "./AddToCartButton";

const RestCategoryItemList =({data,showVegOnly, isCartView = false})=>{

    const[open,setOpen]=useState(false)

    
    const safeData = data || [];

    const filteredData = isCartView ? safeData : safeData.filter(item=> !showVegOnly || item?.card?.info?.itemAttribute?.vegClassifier === 'VEG')
      
    return (

        <>
        <div>
           {
              filteredData.map((item)=>{
                   
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
       
          {  open && <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b bg-[#4c4f5599] to-transparent backdrop-blur-sm flex items-center justify-center"><Addons addons={data} open={open} setOpen={()=>setOpen(false)}/></div>}
           
           
        </>
    )
}

export default RestCategoryItemList;