import LocalParking from '@mui/icons-material/LocalParking';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import CommuteIcon from '@mui/icons-material/Commute';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

import {divIcon} from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

export function LocalParkingIcon () {
  return (
    <LocalParking style={{color: "white", backgroundColor: "blue", borderRadius: "4px"}}/>
    )
}

export const CarParkIcon = divIcon({
    html: renderToStaticMarkup(
        <LocalParkingIcon/>
    )
});

export const BikeStandIcon = divIcon({
  html: renderToStaticMarkup(
      <DirectionsBikeIcon/>
    )
});

export const BusAndTramIcon = divIcon({
  html: renderToStaticMarkup(
      <CommuteIcon/>
    )
});

export const PoisIcon = divIcon({
  html: renderToStaticMarkup(
      <TheaterComedyIcon/>
    )
});