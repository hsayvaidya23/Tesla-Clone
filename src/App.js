import React, { useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* headerBlock */}
      </div>
    </Router>
  );
}

export default App;
