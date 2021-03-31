import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import styled from "styled-components";
import mapData from "../../data/map";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: mapData.coordinates.lat,
        lng: mapData.coordinates.lng,
      }}
      defaultOptions={{
        styles: mapData.styles,
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      <Marker
        position={{
          lat: mapData.coordinates.lat,
          lng: mapData.coordinates.lng,
        }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapContainer = styled.div`
  max-width: 100%;
  width: 87vw;
  height: 430px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

const MapComponent = () => {
  console.log(process.env.GATSBY_GOOGLE_API_URL);
  return (
    <MapContainer>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </MapContainer>
  );
};

export default MapComponent;
