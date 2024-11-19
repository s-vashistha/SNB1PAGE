import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.css';
import About from './components/aboutus/AboutUs';
import Dashboard from './components/dashboard/Dashboard';
import FAQ from './components/faqs/Faqs';
import Features from './components/features/Features';
import FeaturesChart from './components/features/FeaturesChart';
import Footer from './components/footer/Footer';

import Join from './components/join/Join';
import Testimonials from './components/testimonials/Testimonials';
import Work from './components/working/Work';
import Mobapp from './components/mobileapp/Mobapp';
import Connect from './components/getintouch/Connect';
import HealthParameterTable from './components/features/HealthParameterTable';
import ActivityMonitoringTable from './components/features/ActivityMonitoringTable';
import HealthAlertTable from './components/features/HealthAlertTable';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Workcard from './components/cards/Workcard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Move components that should be within routing */}
        <Routes>
          <Route path="/" element={
            <>
            <Header/>
            <Dashboard />
            <Carousel/>
            <Workcard/>
              <About />
              <Features />
              {/* <Work /> */}
              <Mobapp/>
              <Testimonials />
              <Join />
              <FAQ />
              <Footer />
            </>
          } />
          {/* Individual route for "Primary Health Parameters" */}
          <Route path="/pri" element={<FeaturesChart />} /> 
          <Route path="/getintouch" element={<Connect />} /> 
          <Route path="/primary" element={<HealthParameterTable />} /> 
          <Route path="/am" element={<ActivityMonitoringTable />} /> 
          <Route path="/healthalert" element={<HealthAlertTable />} /> 
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
