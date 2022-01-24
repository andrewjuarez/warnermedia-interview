import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import HomePage from './Pages/Home';
import DetailsPage from './Pages/Details';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:movieId' element={<DetailsPage />} />
        </Routes>
      </Container>

    </BrowserRouter>
  );
}

export default App;
