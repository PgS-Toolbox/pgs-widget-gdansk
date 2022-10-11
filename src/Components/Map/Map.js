import { React, useState, useContext } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { withStyles } from '@material-ui/core/styles';
import { ScaleControl } from 'react-leaflet';

import LocateControl from "./LocateControl"
import OnClickMarker from "./OnClickMarker"
import PositionMarker from "./PositionMarker"
import CarParks from './CarParks';
import BikeStands from './BikeStands';
import BusAndTram from './BusAndTram';
import Pois from './Pois';
import SearchField from './SearchField';
import ZoomControl from "./ZoomControl"
import ShowContext from "../../Contexts/ShowContext";

import styles from "../../styles"


function Map (props) {
  const {classes} = props

  const [ hideByZoom, sethideByZoom ] = useState(true);

  const {showCarParks, showBikeStands, showBusAndTram, showPois } = useContext(ShowContext);

  function handleZoomChange (value) {
    sethideByZoom(value);
  }

  return (
    <div>
      <MapContainer center={[process.env.REACT_APP_START_LAT, process.env.REACT_APP_START_LNG]} 
        zoom={16} scrollWheelZoom={true} className={classes.map_height}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        >
        </TileLayer>
      
        <SearchField />
        <ScaleControl position="bottomright" />
        <OnClickMarker />
        <LocateControl />
        <PositionMarker />
        <ZoomControl handleZoomChange={handleZoomChange}/>
        
        { showCarParks ? <CarParks/> : null }
        { showBikeStands && hideByZoom ? <BikeStands/> : null }
        { showBusAndTram && hideByZoom ? <BusAndTram/> : null }
        { showPois && hideByZoom ? <Pois/> : null }

      </MapContainer>
    </div>
  )
}

export default withStyles(styles)(Map);
