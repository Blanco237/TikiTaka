import React, { useEffect, useState } from "react";

import classes from "./loader.module.css";

import axios from "axios";

const Loader = () => {
  const short_url = window.location.pathname.split("/")[1];
  const url = `https://randly-server.herokuapp.com/${short_url}`;
  const [number, setNumber] = useState(5);

  const clickElem = (link)=> {
    const a = document.createElement('a');
    a.href = 'https://'+link;
    a.click();
  }

  useEffect(() => {
    const getFullUrl = async () => {
      const result = await axios.get(url);
      if (result.data.error) {
        alert(result.data.error);
        return;
      }
      let link = result.data.long_url;
      link = link.split("//")[1] || link.split("//")[0];
      clickElem(link);
    };
    if(number === 0) return;
    if (number === 1) {
      getFullUrl(short_url);
    }
    const interval = setInterval(() => {
      setNumber(number - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.body}>
      <h2>Your Page is Loading, Please Be Patient</h2>
      <button>Donate To Developer</button>
      <div className={classes.loaderBody}>
        <div className={classes.loader}>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
