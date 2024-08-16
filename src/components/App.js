import './App.css';
import Header from './Header';
// import Body from './Body';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import myContext from '../utils/context';
import { Provider } from 'react-redux';
import AppStore from '../utils/AppStore';

function App() {
    const [searchInput,setSearchInput]=useState([])
    
  return (
    <>
    <Provider store={AppStore}>
    <myContext.Provider value={{name:'Suresh Teja',age:24,searchInput,setSearchInput}}>
    <Header setSearchInput={setSearchInput}/>
    {/* <Body searchInput={searchInput}/> */}
    <Outlet />
    </myContext.Provider>
    </Provider>
    </>
  );
}

export default App;
