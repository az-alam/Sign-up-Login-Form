import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Details from './Details';
import Error from './Error';
import {Routes,Route} from "react-router-dom";


function Main() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </>
  );
}

export default Main