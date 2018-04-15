

import React from 'react';

const ThumbnailComponent = (props) => {



return (<div className="thumbnail">
    <a href= {props.href}>
      <img src={props.imgSrc} alt = "projects" />
      <div className="caption">
        <p></p>
      </div>
    </a>
  </div>);


}

export default ThumbnailComponent;