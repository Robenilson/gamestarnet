import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import UserForm from './pages/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from'./pages/Home.jsx'

function App() { 
  return (

   <div>
        <Login emailLabel="Endereço de Email" passwordLabel="Senha"  />
    </div>
  

 
   
  );
};

export default App;