import React, { lazy, useEffect, useState } from 'react';
import './App.css';
import { OwnProps } from './AppTs.interface';
import Header from 'widgets/Header';
import Footer from 'widgets/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from 'entities/store/redux-store';


const HomeComp = lazy(() => import("pages/home"))
const EventsComp = lazy(() => import("pages/events"))
const EventsPlaceComp = lazy(() => import("pages/place"))
const RestaurantComp = lazy(() => import("pages/restaurants"))
const RegisterComp = lazy(() => import("pages/register"))
const LoginComp = lazy(() => import("pages/login"))



const App: React.FC<OwnProps> = () => {

  const navigate = useNavigate();


  const isAuth = useSelector((state: AppStateType) => state.loginR.isAuth)
  const [authHk, setAuthHk] = useState<boolean>(isAuth)

  useEffect(() => {
    setAuthHk(isAuth)
  }, [isAuth])

  // if (authHk) {
  //   navigate('/')
  // }

  return (
    <div className="App">
      {
        authHk
          ?
          <Header />
          :
          <div>
            <button>grancvel</button>
          </div>
      }
      <Routes>
        <Route path='/' element={<HomeComp />} />
        <Route path='/events/:id' element={<EventsComp />} />
        <Route path='/events/place/:id' element={<EventsComp />} />
        <Route path='/restaurant/:id' element={<RestaurantComp />} />
        <Route path='/register' element={<RegisterComp />} />
        <Route path='/login' element={<LoginComp />} />

        <Route path='*' element={<HomeComp />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
