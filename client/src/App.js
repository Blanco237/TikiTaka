import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import HeroBody from "./components/Hero/HeroBody";
import RippleButton from "./components/RippleButton/RippleButton";
import Observable from "./components/Observable/Observable";
import DontYouDare from "./components/DontYouDare/DontYouDare";
// import Home from './pages/Home';
// import Loader from './pages/Loader'

const App = () => {
  const ref = useRef();

  return (
    <div className="body">
      <DontYouDare elementRef={ref} />
      <div ref={ref}>
        <RippleButton />
      </div>
    </div>
  );
};

export default App;
