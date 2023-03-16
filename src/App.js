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
        {/* <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route
              path="messages"
              element={<DashboardMessages />}
            />
            <Route path="tasks" element={<DashboardTasks />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
        </Routes> */}
        <Routes >
          <Route path="/" element={<BookNow />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>    
      </div>
    </Router>
  );
}

export default App;
