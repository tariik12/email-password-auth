import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RegisterRBS from './components/RegisterRBS/RegisterRBS';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBS from './components/RegisterBs/RegisterBS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/register',
        element:<Register />
      },
      {
        path:'/register-rbs',
        element:<RegisterRBS />
      },
      {
        path:'/register-bs',
        element:<RegisterBS />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />
);