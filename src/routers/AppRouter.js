import React from 'react';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Home from '../components/Home.js';
import Portfolio from '../components/Portfolio.js';
import '../styles/AppRouter.css';



const AppRouter = () => {

  
  return (<BrowserRouter> 
    <div className = "div_app_router">
    <Header/>
    <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Portfolio' component={Portfolio}/>
          <Route path='/Contact' component={Contact}/>
    </Switch>
   </div>
    </BrowserRouter>);


}


export default AppRouter;