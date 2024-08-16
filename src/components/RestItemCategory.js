
import RestCategoryItemList  from "./RestCategoryItemList";
import { FaAngleDown } from "react-icons/fa6";

const RestItemCategory=({category,showVegOnly,showItems,setShowIndex})=>{


    const handleHeader =()=>{
         setShowIndex()
    }

    
    return(
        <>
        <div className=" border-b-4 border-b-[#f1f1f6] border-t-4 border-t-[#f1f1f6]">
            {/*Category header */}
        <div className="flex justify-between px-3 py-2 my-2 cursor-pointer rounded-md items-center" onClick={handleHeader}>
            <h3 className="text-[#3e4152] font-bold pl-2">{category.title} ({showVegOnly ? category?.itemCards.filter(item=>item?.card?.info?.isVeg ===1).length : category?.itemCards?.length})</h3>
            <h4 className="mx-8 pt-2 text-green">{<FaAngleDown />}</h4>
        </div>
             {/* Category body */}
             <div>
             {showItems &&  <RestCategoryItemList data={category?.itemCards} showVegOnly={showVegOnly} />}
             </div>
        </div>
        </>
    )
}

export default RestItemCategory;
