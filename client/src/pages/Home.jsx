import React, { useState } from "react";

import classes from "./home.module.css";

import RippleButton from "../components/RippleButton/RippleButton";

import axios from "axios";
import validURL from "../utils/validUrl";

const Home = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    if (!validURL(url)) {
      alert("Please Enter a valid URL");
      setLoading(false);
      return;
    }
    const result = await axios.post("https://randly-server.herokuapp.com/addLink", {
      long_url: url,
    });
    if(result.data.error) {
        alert(result.data.error);
    }else{
        setResult(result.data.short_url);
        setUrl('');
    }
    setLoading(false);
  };

  return (
    <div className={classes.body}>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <h2>Enter Url To shorten</h2>
        <input
          type={"text"}
          className={classes.input}
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <RippleButton clickAction={handleSubmit} disabled={loading}/>
      </form>
      <div className={`${classes.result} ${loading ? classes.loading : ""}`}>
        <h3>Result</h3>
        {result ? (
          <a href={`https://randly.vercel.app/${result}`}>
            https://randly.vercel.app/{result}
          </a>
        ) : (
          <a href={`https://randly.vercel.app/#`}>No result</a>
        )}
      </div>
    </div>
  );
};

export default Home;
