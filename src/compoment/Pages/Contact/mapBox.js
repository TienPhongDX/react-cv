import React from 'react'
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibnRwaG9uZ2R4NjIwIiwiYSI6ImNrZzZjczRxZTBvZjYycWw3YmM5bTRnMnAifQ.48cF9eyzcVIyDhdKhes9dg";

class mapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 109.107203,
      lat: 13.379193,
      zoom: 13
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        <div ref={(el) => (this.mapContainer = el)} className="map mapContainer" />
      </div>
    );
  }
}
 export default mapBox;