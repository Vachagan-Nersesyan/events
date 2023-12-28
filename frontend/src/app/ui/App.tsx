import React, { lazy } from 'react';
import './App.css';
import { OwnProps } from './AppTs.interface';
import Header from 'widgets/Header';
import Footer from 'widgets/Footer';
import { Route, Routes } from 'react-router-dom';
import EventsComp from 'pages/events';
import EventsPlaceComp from 'pages/place'
import RestaurantComp from 'pages/restaurants'



const HomeComp = lazy(() => import("pages/home"))


const App: React.FC<OwnProps> = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomeComp />} />
        <Route path='/events/:id' element={<EventsComp />} />
        <Route path='/events/place/:id' element={<EventsPlaceComp />} />
        <Route path='/restaurant/:id' element={<RestaurantComp />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
