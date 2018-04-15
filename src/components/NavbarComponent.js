
import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavbarComponent.css';


const NavbarComponent = (props) =>
{


return (<div>

<nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-2">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        
        </div>
     <div className="collapse navbar-collapse" id="navbar-collapse-2">

          <ul className="nav navbar-nav">
       
            <li>{props.home}</li>
            <li>{props.about}</li>
            <li>{props.portfolio}</li>
            <li>{props.contact}</li>
      
           
          </ul>
    
        </div>
      </div>
    </nav>



</div>);


}

export default NavbarComponent;