import React, { useState, useEffect} from "react";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { LinearProgress } from "@mui/material";

import { newBusAndTramDetailsFetchAndFormat } from "../../../FetchersAndFormatters/FetchConfig";
import FeatureItemText from "../../Lists/FeatureItemText";
import GeoButtons from "../../Buttons/GeoButtons"
import styles from "../../../styles";
import WidgetTableRow from "../../WidgetTable/WidgetTableRow";

function PubTransListItem (feature, classes) {
    const [ state, setState ] = useState(false)
    const [ departures, setDepartures ] = useState(null)

    const handleClick = () => {
        setState(!state);
    };

    useEffect((fetcher = newBusAndTramDetailsFetchAndFormat(setDepartures, {"feature": feature})) => {
        if (state === true){
            fetcher.getData()
        }
    }, [state]) // eslint-disable-line react-hooks/exhaustive-deps
      
    return (
        <div >
          <ListItem 
            button
            onClick={() => handleClick()}
            className={classes.listItem}>
          
            {state ? (<ExpandLessIcon />) : (<ExpandMoreIcon />)}
            <FeatureItemText primary={feature.properties.name }/>
            <GeoButtons latlong={feature.geometry.coordinates}/>
          </ListItem>
          <Collapse
              component="li"
              in={state}
              timeout="auto"
              unmountOnExit>

            {  departures === null ? <LinearProgress/> : 
              ( <TableContainer>
                <Table>
                  <TableHead>
                    <WidgetTableRow data={["Line", "Direction", "Departure"]} className={classes.table_header}/>
                  </TableHead>
                  <TableBody>
                    {departures.properties.departures.map((dep) => (
                      <WidgetTableRow key={dep.lineId} data={[dep.lineId, dep.destination, dep.departure]} className={classes.table_row}/>
                    ))}
                  </TableBody>
                </Table>
                </TableContainer> )}
          </Collapse>
        </div>
      );
}

export default withStyles(styles)(PubTransListItem);
