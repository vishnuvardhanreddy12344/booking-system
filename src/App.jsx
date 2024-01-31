
import React from 'react';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails.jsx';
import BookingForm from './components/BookingForm';
import './App.css';

const App = () => {
  return (

   <BrowserRouter>
    <Routes>
      
      <Route path="/" exact component={<ShowList/>} />
      <Route path="/show/:id" component={<ShowDetails/>} />
      <Route path="/booking/:id" component={<BookingForm/>} />

  </Routes>
   </BrowserRouter>
  );
};

export default App;
