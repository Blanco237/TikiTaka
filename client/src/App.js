import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero/Hero';
import HeroBody from './components/Hero/HeroBody';
import Home from './pages/Home';
import Loader from './pages/Loader'


const App = () => {

    return (
        <div className='body'>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home />} component={Home} />
                        <Route path='/:short_url' element={<Loader />} component={Loader} />
                    </Routes>
                </Router>
        </div>
    )
}

export default App;
