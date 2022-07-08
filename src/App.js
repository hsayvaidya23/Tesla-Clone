import React, { useState} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
        <HeaderBlock />
      </div>
    </Router>
  );
}

export default App;
