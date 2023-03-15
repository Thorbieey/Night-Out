import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BookNow from './components/pages/BookNow';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  return (
   <Router>
      <div>
        <Header/>
        <Routes basename= "NIGHT-OUT">
          <Route path="/NIGHT-OUT/bookNow" element={<BookNow />} />
          <Route path="/NIGHT-OUT/about" element={<About />} />
          <Route path="/NIGHT-OUT/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
