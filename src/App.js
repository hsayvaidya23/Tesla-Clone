import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import Login from './components/Login/Login';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={
            <>
              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              {isMenuOpen && <Menu />}
              <HeaderBlock />
            </>
          } />
          <Route exact path='/login' element={<Login/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
