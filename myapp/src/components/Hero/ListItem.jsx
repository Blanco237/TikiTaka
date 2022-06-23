import React from "react";

import classes from "./list.module.css";

const ListItem = ({ index, item}) => {
  return (
    <li
      className={`${classes.listItem} listItem-${index} listItem ${classes.animWrapper}`}
      key={index}
    >
        <div className={classes.listItemIcon}>
        <img src={item.icon} />
        <p className={classes.listItemText}>{item.text}</p>
      </div>
    </li>
  );
};

export default ListItem;
