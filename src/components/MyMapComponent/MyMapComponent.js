import React, { useState, useEffect } from 'react'
import Geocoder from 'react-mapbox-gl-geocoder'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { geolocated } from "react-geolocated"


const MyMapComponent = (props) => {
useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
},[])
/* const result = !props.isGeolocationAvailable ? (
  {width: '80vw', height: '100vh', latitude:0, longitude: 0, zoom: 3 }
) : !props.isGeolocationEnabled ? (
  {width: '80vw', height: '100vh', latitude:0, longitude: 0, zoom: 3 }
) : props.coords ? {width: '80vw', height: '100vh', latitude: props.coords.latitude, longitude: props.coords.longitude, zoom: 3 }: 
{width: '80vw', height: '100vh', latitude:0, longitude: 0, zoom: 3 }
; */
  const [lat, setLatitude] = useState(0);
  const [long, setLongitude] = useState(0);
  const [viewport, setViewport] = useState({width: '80vw', height: '100vh', latitude:lat, longitude:long, zoom: 3 })
  return (
    <ReactMapGL
      {...mapAccess} {...viewport} mapStyle = 'mapbox://styles/mapbox/satellite-v9'
      onViewportChange = {viewport => {
        setViewport(viewport);
      }}
     >
   <Marker latitude={lat} longitude={long} > <button>Limbe</button></Marker>
    </ReactMapGL>
  )
}

const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MAP_API_KEY
}

export default MyMapComponent;