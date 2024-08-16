import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Body from './components/Body';
import Cart from './components/Cart';
// import AboutUs from './components/Aboutus';
import Error from './components/Error';
import Help from './components/Help';
import RestaurentMenu from './components/RestaurentMenu';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { lazy } from 'react';




const root = ReactDOM.createRoot(document.getElementById('root'));

const AboutUs = lazy(()=>import('./components/Aboutus'));  //this is lazy loading technique where you can split the large amount of code in to small code files and used when it is nesseary while scrolling the website then the asyncronous code will show the data accordingly.

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/about',
        element:<Suspense fallback={<h1>loading...</h1>}><AboutUs/></Suspense>
      },
      {
        path:'/help',
        element:<Help/>
      },
      {
        path:'/restaurents/:resId/cart',
        element:<Cart/>
      },
      {
        path:'/restaurents/:resId',
        element:<RestaurentMenu/>
      }
    ],
    errorElement:<Error/>
  }

])
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
