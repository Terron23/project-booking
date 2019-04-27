import React, { Component } from 'react';
import { Map, GoogleApiWrapper,  InfoWindow, Marker } from 'google-maps-react';

const styles = {
  width: '100%',
  height: '100%',
  float: 'right'
};

export class MapContainer extends Component {
 constructor(props){
   super(props);
   this.state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
 }


 onMarkerClick = (props, marker, e) =>
 this.setState({
   selectedPlace: props,
   activeMarker: marker,
   showingInfoWindow: true
 });

onClose = props => {
 if (this.state.showingInfoWindow) {
   this.setState({
     showingInfoWindow: false,
     activeMarker: null
   });
 }
};

  render() {
    const pos = [{lat: 37.759703, lng: -122.428093}, {lat: 38.759703, lng: -123.428093}, ]
    return (
    
        <Map 
        google={this.props.google}
        zoom={14}
        style={styles}
        visible={true}
        initial
        >
        


        <Marker 
        onClick={this.onMarkerClick}
                name={5}
                position={{lat: 73.9969, lng: 40.7061}}
                 />

                  <Marker 
        onClick={this.onMarkerClick}
                name={2}
                position={{lat: 73.9754, lng: 40.6826}}
                 />

         
      
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCvUna-ZY2L065FZg9zRXsMWgVE8s9lHvw'
})(MapContainer);