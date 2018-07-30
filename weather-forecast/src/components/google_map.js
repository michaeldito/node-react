import React, { Component } from 'react';

class GoogleMap extends Component {
  // This lifecycle method gets called after this component gets 
  // rendered to the screen.
  componentDidMount() {
    // GoogleMap takes a reference to html element where we want to 
    // render the map to. This is how we work with 3rd part libraries.
    // We indicate our zoom level, and where the map should be centered.
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map is a direct reference to this html element
    return <div ref="map" />
  }
}

export default GoogleMap;