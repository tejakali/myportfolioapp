import React, { Component } from 'react';
import logo from './logo.svg';


import AppRouter from './routers/AppRouter';

import "./App.css";



class MyPortfolioApp extends Component {
  render() {
    return (
      <div className = "div_myportfolioapp">

       
        <AppRouter/>
     
      </div>
    );
  }
}

export default MyPortfolioApp;
