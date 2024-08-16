import { useEffect, useState } from "react";
import { MENU_API } from "./cdnlinks";
//this is a custom hook to make the api call and fetch the data and display the data in restaurentmenu component using the usestate hook and resid, by making this we can achive code reusability ,can write modular code and with less logic.
const useRestaurentMenu =(resId)=>{

    const [resMenu, setResMenu] = useState(null)

    useEffect(()=>{
        fetchData(resId);
    },[resId])

    const fetchData= async(resId)=>{
        const response = await fetch(MENU_API + resId);
        const data = await response.json();
        setResMenu(data.data)

    }

    return resMenu;
}

export default useRestaurentMenu;

