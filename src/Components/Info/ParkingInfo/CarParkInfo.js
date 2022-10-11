import { useContext, useEffect, useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { LinearProgress } from "@mui/material";
import WidgetTableRow from "../../WidgetTable/WidgetTableRow";

import ActivePositionContext from "../../../Contexts/ActivePositionContext";
import GeoDataContext from "../../../Contexts/GeoDataContext";

import GeoButtons from "../../Buttons/GeoButtons";

import {k_nearest} from "../../../Utils/GeoUtils";

import { CarParkDetailsFetchAndFormat } from "../../../FetchersAndFormatters/osmFetchAndFormat";

import styles from "../../../styles";
import Heading from "../../Heading";

function getNearestCarParkInfo(carParks, activePosition, setCarParkInfo) {
    const nearest = k_nearest(carParks, activePosition, 1);
    const featureDetailsFetcher = new CarParkDetailsFetchAndFormat( setCarParkInfo, {"feature": nearest[0].layer.feature} );
    featureDetailsFetcher.getData();
}

function CarParkInfo (props) {
    const { classes } = props;
 
    const { carParks } = useContext(GeoDataContext);
    const { activePosition } = useContext(ActivePositionContext);

    const [ nearestCarParkInfo, setCarParkInfo ] = useState(null);

    useEffect(() => {
        if (activePosition !== null && carParks !== null ) {
            getNearestCarParkInfo(carParks, activePosition, setCarParkInfo);
        }
    }, [activePosition, carParks]);

    return nearestCarParkInfo === null ? (
        <div className={classes.margin_bottom}>
            <Heading> NEAREST CAR PARK </Heading> 
            <LinearProgress /> 
        </div> ) : 
        ( <div>
            <div className={classes.margin_bottom}>
                <Heading> NEAREST CAR PARK </Heading> 
                <GeoButtons latlong={nearestCarParkInfo.geometry.coordinates}/>
            </div>
            <TableContainer>
            <Table>  
                <TableBody>
                    <WidgetTableRow data={["Name", nearestCarParkInfo.properties.name]} className={classes.table_row}/>
                    <WidgetTableRow data={["Free spots", nearestCarParkInfo.properties.occupancy]} className={classes.table_row}/>
                </TableBody>
            </Table>
            </TableContainer>
        </div> 
        );
}

export default withStyles(styles)(CarParkInfo);