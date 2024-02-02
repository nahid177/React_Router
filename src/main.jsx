import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home/Home.jsx';
import User from './component/All_Card/User/User.jsx';
import User_Contact from './component/All_Card/User/User_Contact.jsx';
import Card_Read_More from './component/All_Card/Card/Card_Read_More.jsx';
import Sing_UP from './component/All_Card/sing_in_up/Sing_UP.jsx';
import Sing_in from './component/All_Card/sing_in_up/Sing_in.jsx';
import Product from './component/product_data/product.jsx';
import Chatbox from './component/All_Card/Card/chatbox.jsx';
import Dashbord from './component/All_Card/Card/Dashbord.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/user",
        loader: () => fetch('https://jsonplaceholder.typicode.com/todos'),
        element: <User></User>,
      },
      {
        path: "/User_contact",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User_Contact></User_Contact>,
      },
      {
        path: "/users/:userID",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <Card_Read_More></Card_Read_More>
      },
      {
        path: "/sing_UP",
        element: <Sing_UP></Sing_UP>
      },
      {
        path: "/sing_in",
        element: <Sing_in></Sing_in>
      },
      {
        path: "/product",
        element: <Product></Product>
      },
      {
        path: "/inbox",
        element: <Chatbox></Chatbox>
      },
      {
        path: "/dashbord",
        element:<Dashbord></Dashbord>
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
