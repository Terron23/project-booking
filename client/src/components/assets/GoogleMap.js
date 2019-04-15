import React, { Component } from 'react';
import { Map, GoogleApiWrapper,  InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  float: 'right'
};

export class MapContainer extends Component {
 

  render() {
    return (
    
        <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCvUna-ZY2L065FZg9zRXsMWgVE8s9lHvw'
})(MapContainer);