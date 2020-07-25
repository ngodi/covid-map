import React, { useState, useEffect } from 'react'
import Geocoder from 'react-mapbox-gl-geocoder'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { geolocated } from "react-geolocated"


const MyMapComponent = (props) => {

const result = !props.isGeolocationAvailable ? (
  {width: '80vw', height: '100vh', latitude:0, longitude: 0, zoom: 3 }
) : !props.isGeolocationEnabled ? (
  {width: '80vw', height: '100vh', latitude:0, longitude: 0, zoom: 3 }
) : props.coords ? {width: '80vw', height: '100vh', latitude: props.coords.latitude, longitude: props.coords.longitude, zoom: 3 }: 
{width: '80vw', height: '100vh', latitude:0, longitude: 0, zoom: 3 }
;

  const [viewport, setViewport] = useState( result )
  return (
    <ReactMapGL
      {...mapAccess} {...viewport} mapStyle = 'mapbox://styles/mapbox/satellite-v9'
      onViewportChange = {viewport => {
        setViewport(viewport);
      }}
     >

    </ReactMapGL>
  )
}

const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MAP_API_KEY
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(MyMapComponent);