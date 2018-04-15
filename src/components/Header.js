

import React from 'react';
import {NavLink} from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import '../styles/Header.css'

const Header = () => {

 return (<div>
            
            <NavbarComponent 
            
          home = {<NavLink exact to = '/'>Home</NavLink>}
         about = {<NavLink to = '/About' >About</NavLink>}
        portfolio = {<NavLink to = '/Portfolio'   >Portfolio</NavLink>}
        contact = {<NavLink to = '/Contact'   >Contact</NavLink>}
            
            
            />
             
         </div>);

    
}

export default Header;