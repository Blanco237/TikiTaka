import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero/Hero';
import HeroBody from './components/Hero/HeroBody';
import RippleButton from './components/RippleButton/RippleButton';
import Observable from './components/Observable/Observable';
// import Home from './pages/Home';
// import Loader from './pages/Loader'


const App = () => {

    return (
        <div className='body' >
            <h1>Cool Startup That Does Cool Things</h1>
            <Observable />
        </div>
    )
}

export default App;
