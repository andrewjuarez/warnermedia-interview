import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import pages
import HomePage from './Pages/Home';
import DetailsPage from './Pages/Details';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:movieId' element={<DetailsPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
