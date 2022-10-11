import React from "react";
import List from "@material-ui/core/List";
import PoiListItem from "./PoiListItem";

const PoiList = ({ pois }) => {

  const elements = pois.map(element => {
    return (
      <div key={element.properties.id}>
        <PoiListItem feature={element} />
      </div>
    );
  });

  return (
    <div className="widget-list">
      <List>{elements}</List>
    </div>
  );
};

export default PoiList;
