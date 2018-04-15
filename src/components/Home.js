

import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css';

const Home = () => {

    return (<div className = "home_page_flex_container_before">
           <div className = "home_page_flexcontainer">

                <div>
                <h1 className = "home_page_title1">Heyy I'm Teja Kalikota</h1>
            <h1 className = "home_page_title"> WELCOME TO MY PORTFOLIO PAGE</h1></div>
                <div><Link to = "/about" className = "home_page_button">I'm Ready To Hire</Link></div>
           </div>

           </div>);
}

export default Home;