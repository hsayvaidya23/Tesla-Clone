import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import SignUp from "./components/SignUp/SignUp";
import TeslaAccount from "./components/TeslaAccount/TeslaAccount";
import { auth } from "./firebase";
import NotFound from "./components/Error/NotFound";

//eslint-disable-next-line

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))

      }
      else {
        // User is signed out
        dispatch(logout())
      }
    }))
  }, [dispatch])


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
                {isMenuOpen ? <Menu /> : <></>}
                <HeaderBlock />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                {user ?
                  <Navigate to="/teslaaccount" />
                : 
                <Login />
                }
              </>
            }
          />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/teslaaccount"
            element={
              <>
                {(user) ? 
                  <>
                    <TeslaAccount
                      isMenuOpen={isMenuOpen}
                      setIsMenuOpen={setIsMenuOpen}
                    />
                    {isMenuOpen ? <Menu /> : <></>}
                  </> 
                 : 
                  <Navigate to="/login" />
                }
              </>
            }
          />
          <Route
            exact
            path="*"
            element={
              <>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {isMenuOpen ? <Menu /> : <></>}
                <NotFound />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
