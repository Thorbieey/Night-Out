import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BookNow from './components/pages/BookNow';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Feedback from './components/feedback/Feedback';

import TicketMaster from './components/content/TicketMaster'


import FavArtists from './components/pages/FavArtists';
import FavRestaurants from './components/pages/FavRestaurants';


import './App.css';

function App() {
  return ( 
   <Router>   
        <Header/>  
        <Routes >
          <Route path="/" element={<BookNow />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route path="/ticket" element={<TicketMaster />} />



          <Route path="/fav-artists" element={<FavArtists />} />
          <Route path="/fav-restaurants" element={<FavRestaurants />} />

        </Routes>          

    </Router> 
  );
}

export default App;
