import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import SignUp from "./components/SignUp/SignUp";
import TeslaAccount from "./components/TeslaAccount/TeslaAccount";

//eslint-disable-next-line

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen && <Menu />}
                <HeaderBlock />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                {user ? (
                  (render) => {
                    <Navigate to="/teslaaccount" />;
                  }
                ) : (
                  <Login />
                )}
              </>
            }
          />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/teslaaccount"
            element={
              <>
                {user ? (
                  (render) => {
                    <Navigate to="/login" />;
                  }
                ) : (
                  <>
                    <TeslaAccount
                      isMenuOpen={isMenuOpen}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                    {isMenuOpen && <Menu />}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
