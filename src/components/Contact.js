
 import React from 'react';
 import Map from './map';
 import '../styles/map.css';
 import '../styles/Contact.css';
 const Contact = () => {
 
 
     return (
     
     <div className = "contact_container">

   

     <div className = "col-xs-6 col-md-6">
             <h1 className = "contact_heading">CONTACT ME</h1>
             <form>
                 <input type = "text" placeholder = "NAME"/>
                 <br/>
                 <input type = "text" placeholder = "EMAIL ADDRESS"/>
                 <br/>
                 <input type = "text" placeholder = "PHONE NUMBER"/>
                 <br/>
                 <textarea type = "text" rows = "4"  cols = "25" placeholder = "MESSAGE HERE"/>
                 <br/>
             <div className = "contact_send_button_container">
                 <button className = "contact_send_button">SEND</button>
             </div>
        
                 
             </form>
        
    </div>


<div className = "col-xs-6 col-md-6">
        <Map/>
</div>




<div className = "col-xs-12 col-md-12 ">
 <div className = "social_media_container">



  
     <a  target = "_blank" href = "https://www.facebook.com/profile.php?id=100009357591167"><i className = "fa fa-facebook"></i></a>

   <div className = "linked_icon">
      <a  target = "_blank" href = "https://www.linkedin.com/in/teja-kalikota-994280141/"><i className = "fa fa-linkedin"></i></a>
   </div>
   <div className = "github_icon">
      <a  target = "_blank" href = "https://github.com/tejakali"><i className = "fa fa-github"></i></a>
   </div>
    <div className = "angellist_icon">
       <a  target = "_blank" href = "https://angel.co/kalikota-ssv-teja?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar"><i className="fa fa-angellist" aria-hidden="true"></i></a>
    </div>
  </div>
 </div>
 </div>);
 }
 
 
 export default Contact;