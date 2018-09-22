import React, { Component } from 'react';
import '../services/map';
import './MapPage.css';
import getData from "../services/getData";
import Filter from "../components/Filter";
import filterScooters from "../services/filterScooters";

export default class MapPage extends Component {
  state = {
    modelFilter: '',
    minValue: null,
    maxValue: null,
    scooters: [],
  };

  markers = [];


  onModelChange = (event) => {
    this.setState({
      modelFilter: event.currentTarget.value.toLowerCase()
    });
  };

  onMinChange = (event) => {
    const value = parseInt(event.currentTarget.value, 10);
    this.setState({
      minValue: isNaN(value) ? null : value,
      pageIndex: 0
    });
  };

  onMaxChange = (event) => {
    const value = parseInt(event.currentTarget.value, 10);
    this.setState({
      maxValue: isNaN(value) ? null : value,
      pageIndex: 0
    });
  };


  async componentDidMount() {
    await window.mapLoadedPromise;

    this.map = new window.google.maps.Map(
      document.getElementById('map'),
      {zoom: 14, center: {lat: 52.520007, lng: 13.404954}}
    );

    const scooters = await getData();
    this.setState({
      scooters
    });
  }

  render() {
    const { modelFilter, scooters, minValue, maxValue } = this.state;

    const filteredScooters = filterScooters(scooters, modelFilter, minValue, maxValue);

    this.clearMarkers();
    this.showMarker(filteredScooters.slice(0 , 30));

    return (
      <div className="map-page">
        <Filter
          onModelChange={ this.onModelChange }
          onMinChange={ this.onMinChange }
          onMaxChange={ this.onMaxChange }
        />
        <div id="map" className="map" />
      </div>

    );
  }

  clearMarkers() {
    this.markers.forEach(marker => {
      marker.setMap(null);
    });
  }

  showMarker(scooters) {
    scooters.forEach(({location: {lat, lng}}) => {
      const marker = new window.google.maps.Marker({
        position: {
          lat,
          lng
        },
        map: this.map
      });

      this.markers.push(marker);
    });
  }
}
