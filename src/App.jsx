
import React from 'react';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails.jsx';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<ShowList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="/booking/:id" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
