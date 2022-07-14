import React from "react";
import { Link } from "react-router-dom";
import "./TeslaAccount.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import Car from "../Car/Car";

function TeslaAccount({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);

  const logoutOfApp = () => {};

  return (
    <div className="teslaAccount">
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo">
          <Link to="/teslaaccount">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model X</Link>
          <Link to="/teslaaccount">Model Y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panels</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Tesla Account</Link>
          <Link to="#" onClick={logoutOfApp}>
            Log Out
          </Link>
          <div
            className="teslaAccount__menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className="header__menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon className='teslaAccount__closeMenu' /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </div>
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName + "'s"} Tesla </h4>
        </div>
        <div className="teslaAccount__infoRight">
          <Link to="#">Home</Link>
          <Link to="#">Account</Link>
          <Link to="#">History</Link>
          <Link to="#" onClick={logoutOfApp}>
            Sign Out
          </Link>
        </div>
        </div>
        <div className="teslaAccount__car">
          <Car
            imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
            model="model s"
            testDrive
          />
          <Car
            imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
            model="model x"
          />
      </div>
    </div>
  );
}

export default TeslaAccount;
