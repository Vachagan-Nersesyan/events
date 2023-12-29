import React, { lazy } from 'react';
import './App.css';
import { OwnProps } from './AppTs.interface';
import Header from 'widgets/Header';
import Footer from 'widgets/Footer';
import { Route, Routes } from 'react-router-dom';


const HomeComp = lazy(() => import("pages/home"))
const EventsComp = lazy(() => import("pages/events"))
const EventsPlaceComp = lazy(() => import("pages/place"))
const RestaurantComp = lazy(() => import("pages/restaurants"))



const App: React.FC<OwnProps> = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomeComp />} />
        <Route path='/events/:id' element={<EventsComp />} />
        <Route path='/events/place/:id' element={<EventsComp />} />
        <Route path='/restaurant/:id' element={<RestaurantComp />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
