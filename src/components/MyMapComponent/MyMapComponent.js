import React, { useState, useEffect } from 'react'
import Geocoder from 'react-mapbox-gl-geocoder'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'


const MyMapComponent = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 0,
    longitude: 0,
    zoom: 5
  })
  return (
    <ReactMapGL
      {...mapAccess} {...viewport} {...mapStyle}
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

const mapStyle = {
  width: '80vw',
  height: '100vh'
}

const queryParams = {
  country: 'us'
}
export default MyMapComponent;