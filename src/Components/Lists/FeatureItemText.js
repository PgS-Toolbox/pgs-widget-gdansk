import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import styles from "../../styles"

function FeatureItemText (props) {

    const {classes, primary} = props

    return (<ListItemText
    primary={
      <Typography className={classes.listItemText}> 
        { primary }
      </Typography> } />)
}

export default withStyles(styles)(FeatureItemText);