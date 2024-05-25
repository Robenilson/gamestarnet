import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery';
import Login from '../src/pages/Login';
import UserForm from '../src/pages/UserForm';
import NewProduto from '../src/pages/NewProduto';
import Home from '../src/pages/Home';
import Venda from'../src/pages/vendas'
import App from'../src/pages/App'


import { createBrowserRouter, RouterProvider  } from "react-router-dom"



const router=createBrowserRouter([
    { element:<App />  ,
    children:[
     { path:"/",   element:<Login />},
     { path:"/Home",   element:<Home />},
      { path:"/UserForm",   element:<UserForm />},
      { path:"/venda",  element:<Venda /> },
      { path:"/NewProduto",  element:<NewProduto /> }
    ]}
  ])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>




);


