import React, { useContext, useState, useEffect } from "react";
import { URL_LOGO } from "./../utils/cdnlinks";
import myContext from "../utils/context";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";


const Header = ({props,searchInput,setSearchInput}) => {
    const[input,setInput]=useState('')
    const [login,setLogin] = useState('Login');
    const [isSticky, setIsSticky] = useState(false)

    const contextData =useContext(myContext)

    const onlineStatus = useOnlineStatus();

    const cart = useSelector((store)=>store.cart.items)  //subscribed to the store (cartslice)
    

    const handleCart =()=>{

    }

    useEffect(() => {
      if (onlineStatus) {
          setLogin('Logout');
      } else {
          setLogin('Login');
      }
      
      const handleScroll =()=>{
        if(window.scrollY > 0){
          setIsSticky(true)
        }else{
          setIsSticky(false)
        }
      }
      window.addEventListener('scroll',handleScroll);
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }

  }, [onlineStatus]);

  

    const handleLogin =()=>{
       login === "Login" ? setLogin('Logout'):setLogin('Login');
    }

    const handleSearch =()=>{
      setSearchInput(input)
    }
  return (
    <>
  
    <div className={`navbar flex h-20 shadow-md  ${isSticky ? 'fixed top-0 left-0 w-[100%]':''} scroll-smooth z-10 bg-white`}>
    <Link to='/'><div className="navbar-logo  ">
        <img className="navbar-img ml-44 w-9" src={URL_LOGO} alt="app logo" />
      </div></Link>
      <div className="navbar-items flex justify-between items-center text-[#3d4152] font-medium gap-16 mr-20">
          <li className="nav-li flex mx-2">
          <input type="text" className="form-control mx-2" placeholder="Search" value={input} onChange={(e)=> 
             {setInput(e.target.value)}}/>
          <button className=" px-[12px] rounded-md  bg-orange-400 hover:text-white  " onClick={handleSearch}><IoSearch className="h-6" /></button>
          </li>
        <Link  to='/about' className="nav-a">
          <li className="list-none hover:text-orange-500">About Us</li>
        </Link>
        <Link to='/help'  className="nav-a">
          <li className="list-none flex hover:text-orange-500">Help <IoHelpBuoyOutline /></li></Link>
        
        <Link to='/restaurents/:resId/cart'><button onClick={handleCart}><li className="list-none flex hover:text-orange-500">Cart<IoCartOutline />
 {cart.length > 0 ?`- (${cart.length})` : ''}</li></button></Link> 
       
        <h5 className="login-name">{contextData.name}{onlineStatus===true?'✅':'🔴'}</h5>
        <button className="px-3 py-2 rounded-md bg-orange-400 hover:text-white" onClick={handleLogin}>{login}</button>
      </div>
    </div> 
    <div style={{ paddingTop: isSticky ? '80px' : '0' }}>
                {/* Content below the header */}
            </div> 
    {/* <Restaurentcard restaurentData={restaurentData}/> */}
    </>
  );
};

export default Header;
