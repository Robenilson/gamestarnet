
import React from 'react';
import Login from '../pages/Login';
import UserForm from '../pages/UserForm';
import "../css/App.css"

import Home from'../pages/Home.jsx'
import { createBrowserRouter, RouterProvider  } from "react-router-dom"

const router=createBrowserRouter([
{ path:"/",  element:<Login />  },
{ path:"/UserForm",   element:<UserForm />},
{ path:"/FrogotLogin",  element:<UserForm /> },
{ path:"/home",  element:<Home /> }])

function App() { 
  return (
    <RouterProvider router={router}/>
  );
};

export default App;