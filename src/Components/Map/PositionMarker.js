import {useContext} from "react"
import {Circle} from "react-leaflet";

import ActivePositionContext from '../../Contexts/ActivePositionContext';

function PositionMarker() {

    const {userPosition} = useContext(ActivePositionContext);

    return userPosition === null ? null : (
      <div>
        <Circle center={userPosition.pos} radius={2}/>
        <Circle center={userPosition.pos} radius={userPosition.acc} />
      </div>
    );
  }

export default PositionMarker;
