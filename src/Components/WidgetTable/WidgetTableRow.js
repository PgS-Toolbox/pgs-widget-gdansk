import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles";

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Typography } from "@material-ui/core";

function WidgetTableRow(props){
    const {classes, data, style, align="center"} = props

    return (
        <TableRow>
            {data.map((d) => (
            <TableCell key={d} align={align}>{
                <Typography className={classes[style]}> 
                {d}
                </Typography>
                }</TableCell>
            ))}
        </TableRow>
    )
}

export default withStyles(styles)(WidgetTableRow);