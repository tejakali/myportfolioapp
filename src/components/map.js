import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import '../styles/map.css'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 17.440819, lng: 78.366665 },
    zoom: 15
  }


 
render() {
 
  

   
    return (
      <div className='google-map'  >
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 17.440819 }
            lng={ 78.366665 }
            text={<img src = "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png" height = "20" width = "20" />}
          />
        </GoogleMapReact>
      </div>
    )
  }
}