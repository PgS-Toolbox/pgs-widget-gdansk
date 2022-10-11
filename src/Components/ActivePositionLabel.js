import {useContext} from "react"
import { withStyles } from '@material-ui/core/styles';

import ActivePositionContext from '../Contexts/ActivePositionContext';
import styles from "../styles";

function ActivePositionLabel(props) {
  
    const { classes } = props
    
    const { activePosition, activeAddress } = useContext(ActivePositionContext)

    return activePosition === null ? null : (
      <div>
        { activeAddress ? 
        <span>
          <span className={classes.h3_style}>
            Address:  &nbsp;
          </span> 
          <span className={classes.text}>
            {activeAddress.country},&nbsp;
            {activeAddress.city || activeAddress.town || activeAddress.village},&nbsp;
            {activeAddress.road}&nbsp;
            {(activeAddress.house_number ? activeAddress.house_number : null)}  &nbsp;
          </span>
        </span> : null }
        <span className={classes.h3_style}>
          Lat:
        </span> 
        &nbsp; 
        <span className={classes.text}>
        {activePosition.lat.toFixed(4)}
        </span>
        &nbsp;
        &nbsp;
        <span className={classes.h3_style}>
          Lon:
        </span> 
        &nbsp; 
        <span className={classes.text}>
          {activePosition.lng.toFixed(4)}
        </span>
      </div>
      );
    }
  
export default withStyles(styles)(ActivePositionLabel);