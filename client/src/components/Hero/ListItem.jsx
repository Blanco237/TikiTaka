import React from "react";
import { RotateContext } from './RotateContext'
import classes from "./list.module.css";
import './list.css';

const ListItem = ({ index, item}) => {

    const {rotate, setRotate} = React.useContext(RotateContext);

    const rotateStyle = {
        '--rotate-state': rotate? 'running' : 'paused'
    };


  return (
    <li
      className={`${classes.listItem} listItem-${index} listItem ${classes.animWrapper} animWrapper`} style={rotateStyle}
      key={index} 
    >
        <div className={classes.listItemIcon}>
        <img src={item.icon} />
        <p className={classes.listItemText} onMouseEnter={() => setRotate(false)} onMouseLeave={() => setRotate(true)}>{item.text}</p>
      </div>
    </li>
  );
};

export default ListItem;
