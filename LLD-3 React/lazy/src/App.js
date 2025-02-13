import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  useEffect(() => {
    // Preload HomePage component
    import('./components/Home').then((module) => setHomePage(() => module.default));
  }, []);

  const loadHomePage = () => {
    import('./components/Home.js').then((module) => setHomePage(() => module.default));
  };

  const loadAboutPage = () => {
    import('./components/About.js').then((module) => setAboutPage(() => module.default));
  };

  const loadContactPage = () => {
    import('./components/Contact.js').then((module) => setContactPage(() => module.default));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={loadHomePage}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={loadAboutPage}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={loadContactPage}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={HomePage ? <Home/> : <div>Loading...</div>} />
          <Route path="/about" element={AboutPage ? <AboutPage /> : <div>Loading...</div>} />
          <Route path="/contact" element={ContactPage ? <ContactPage/> : <div>Loading...</div>} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;