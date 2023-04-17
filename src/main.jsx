import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />
);