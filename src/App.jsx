import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './Layout/layout';
import Cotegory from './pages/Cotegory/cotegory';
import Cart from './pages/Cart/cart';
import Admin from './pages/Admin/Admin';
import Login from './pages/Login/Login';
import SubProducts from './pages/subProducts/SubProducts';
  



const  App = () => { 
  const router = createBrowserRouter([ 
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"cotegory",
          element:<Cotegory/>
        },
        {
          path:"cart",
          element:<Cart/>
        },
        {
          path:"cotegory/subProducts/:id",
          element:<SubProducts/>
        },
      ]
    },
    {
      path:"Login",
      element:<Login/>
    },
    {
      path:"/Admin",
      element:<Admin/>
    }

  ]); 
 
  return <RouterProvider router={router} />; 
};
export default App 