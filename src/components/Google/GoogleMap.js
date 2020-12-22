import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
          lat : 4.579215, 
          lng : 101.061849
      },
      mapTypeControlOptions: false
    };

   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
    fetchPlaces(mapProps, map) {
        const {google} = mapProps;
        const service = new google.maps.places.PlacesService(map);
        // ...
      }
   
    render() {
      return (
              <Map google={this.props.google}
                    onReady={this.fetchPlaces}
                    zoom={16}
                    initialCenter={{
                        lat : this.state.mapCenter.lat,
                        lng : this.state.mapCenter.lng
                    }}
                    center={{
                        lat : this.state.mapCenter.lat,
                        lng : this.state.mapCenter.lng
                    }}>
                <Marker 
                position={{
                    lat : this.state.mapCenter.lat,
                    lng : this.state.mapCenter.lng
                }} />
            </Map>
        
      )
    }
  }

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDTUy8GNEKzQJz654mpjF7uzs6nnAaP_UM')
})(MapContainer)