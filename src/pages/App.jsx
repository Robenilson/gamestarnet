import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/menu'


import "../css/App.css"

function App() { 
  return (
    <div className="app">
      <div className="container">
        <Menu>
          <Outlet />
        </Menu>
      </div>
    </div>

    );
};

export default App;