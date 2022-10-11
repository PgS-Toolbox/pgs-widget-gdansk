import React from "react";
import List from "@material-ui/core/List";
import PubTransListItem from "./PubTransListItem";

const PubTransList = ({ pubtrans }) => {

  const elements = pubtrans.map(element => {
    return (
      <div key={element.properties.id}>
        <PubTransListItem {...element} />
      </div>
    );
  });

  return (
    <div className="widget-list">
      <List>{elements}</List>
    </div>
  );
};

export default PubTransList;
