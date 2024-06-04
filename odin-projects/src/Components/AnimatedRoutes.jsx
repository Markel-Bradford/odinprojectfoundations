import React from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Homepage } from '../Homepage';
import LandingPage from '../Pages/LandingPage';
import EtchASketch from '../Pages/EtchASketch';
import RPS from '../Pages/RPS';

const AnimatedRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();

  return (
    <div>
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/landingpage' element={<LandingPage />} />
            <Route exact path='/etchasketch' element={<EtchASketch />} />
            <Route exact path='/rps' element={<RPS />} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes