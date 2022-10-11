import { React, useContext, useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import { useMemo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import Control from 'react-leaflet-custom-control'

import ActivePositionContext from '../../Contexts/ActivePositionContext';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import styles from '../../styles';
import {geocodeLocation} from "../../FetchersAndFormatters/fetchersDispatcher";


function LocateControl( props ) {  
    const {classes} = props;
    
    const { setActivePosition, setUserPosition, panTo, setActiveAddress} = useContext(ActivePositionContext);
    const [ settingLocation, setSettingLocation] = useState(false);

    const map = useMap();

    function locateMe () {
        setSettingLocation(true)
        map.locate().on("locationfound", function (e) {
            setUserPosition({pos: e.latlng, acc: e.accuracy});
            setActivePosition(e.latlng);
            map.setView(e.latlng, map.getZoom());
            setSettingLocation(false);
            geocodeLocation(e.latlng, setActiveAddress)
          });
    }

    useEffect( () => {
        if (panTo !== null){
            map.panTo([panTo.latlong[1], panTo.latlong[0]]);
        }
    }, [panTo]); // eslint-disable-line react-hooks/exhaustive-deps

    const locateIconButton = useMemo(
      () => (
        <MyLocationIcon onClick={locateMe} className={classes.locate_icon}/>
      ), [], ); // eslint-disable-line react-hooks/exhaustive-deps
  
    return (
      <div>
        { settingLocation ? 
        <Control position="topright">
          <CircularProgress/>
        </Control> 
        : null }

        <Control position="bottomleft">
          <div className="leaflet-bar leaflet-fix-height">{locateIconButton}</div>
        </Control>
      </div>
    );
  }

  export default withStyles(styles)(LocateControl);