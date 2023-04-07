import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// react router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Layout/Home';
import Shop from './component/Shop/Shop';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductLader from './coustomLoader/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home> </Home>,
    // errorElement:<ErrorPage></ErrorPage>,
    children:[
     { 
      path:"/",
      element:<Shop></Shop>,
    },
     { 
      path:"order",
      element:<Order></Order>,
      // loader:()=>fetch('products.json') ei direct loader use kori nai custom loader use korechi 
      loader:cartProductLader
    },
     { 
      path:"inventory",
      element:<Inventory></Inventory>,
    },
     { 
      path:"login",
      element:<Login></Login>,
    },
     { 
      path:"*",
      element:<ErrorPage></ErrorPage>,
    }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
