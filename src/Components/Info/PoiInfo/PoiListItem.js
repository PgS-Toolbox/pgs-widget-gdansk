import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";

import GeoButtons from "../../Buttons/GeoButtons"
import styles from "../../../styles"
import FeatureItemText from "../../Lists/FeatureItemText";

function PoiListItem (props) {

    const { feature, classes } = props

    return (
      <ListItem className={classes.listItem}>
          <FeatureItemText primary={feature.properties.name }/>
          <GeoButtons latlong={feature.geometry.coordinates}/>
      </ListItem>
    );
}

export default withStyles(styles)(PoiListItem);
