import React from 'react';
import '../styles/Portfolio.css';
import ThumbnailComponent from './ThumbnailComponent';

const Portfolio = () => {


    return (<div className = " portfolio_div_container text-center">
  

           <div class = "content">

    
        <h1 className = "portfolio_head">MY WORK</h1>

        <div className = "row">
            <div className ="col-xs-6 col-md-4">
                 <ThumbnailComponent  href = "https://www.facebook.com/profile.php?id=100009357591167" imgSrc = "https://sp.yimg.com/ib/th?id=OIP.Y9RbdL9xD9qsKcjJxktv6QHaEo&pid=15.1&rs=1&c=1&qlt=95&w=146&h=91"/>
            </div>
            <div className ="col-xs-6 col-md-4">
                 <ThumbnailComponent  href = "https://www.facebook.com/profile.php?id=100009357591167" imgSrc = "https://sp.yimg.com/ib/th?id=OIP.Y9RbdL9xD9qsKcjJxktv6QHaEo&pid=15.1&rs=1&c=1&qlt=95&w=146&h=91"/>
            </div>
            <div className =" col-xs-6 col-md-4">
                <ThumbnailComponent  href = "https://www.facebook.com/profile.php?id=100009357591167" imgSrc = "https://sp.yimg.com/ib/th?id=OIP.Y9RbdL9xD9qsKcjJxktv6QHaEo&pid=15.1&rs=1&c=1&qlt=95&w=146&h=91"/>
            </div>
            <div className ="col-xs-6 col-md-4">
                <ThumbnailComponent  href = "https://www.facebook.com/profile.php?id=100009357591167" imgSrc = "https://sp.yimg.com/ib/th?id=OIP.Y9RbdL9xD9qsKcjJxktv6QHaEo&pid=15.1&rs=1&c=1&qlt=95&w=146&h=91"/>
            </div>
            <div className ="col-xs-6 col-md-4">
                <ThumbnailComponent  href = "https://www.facebook.com/profile.php?id=100009357591167" imgSrc = "https://sp.yimg.com/ib/th?id=OIP.Y9RbdL9xD9qsKcjJxktv6QHaEo&pid=15.1&rs=1&c=1&qlt=95&w=146&h=91"/>
            </div>
            <div className ="col-xs-6 col-md-4">
                  <ThumbnailComponent  href = "https://www.facebook.com/profile.php?id=100009357591167" imgSrc = "https://sp.yimg.com/ib/th?id=OIP.Y9RbdL9xD9qsKcjJxktv6QHaEo&pid=15.1&rs=1&c=1&qlt=95&w=146&h=91"/>
            </div>
       </div>

    </div>
       




    </div>);
}


export default Portfolio;