import { useContext } from "react"
import { useMapEvents } from "react-leaflet";
import { Marker } from "react-leaflet";

import ActivePositionContext from '../../Contexts/ActivePositionContext';
import {geocodeLocation} from "../../FetchersAndFormatters/fetchersDispatcher";

function OnClickMarker() {
    const {activePosition, setActivePosition, setActiveAddress} = useContext(ActivePositionContext);

    const map = useMapEvents({
      click: (e) => {
          setActivePosition(e.latlng);
          geocodeLocation(e.latlng, setActiveAddress)
        }
    });

    return activePosition === null ? null : (
      <Marker position={activePosition} />
    );
  }

export default OnClickMarker;
