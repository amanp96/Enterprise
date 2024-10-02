import classNames from "classnames";
import { useState } from "react";

import "./Styles.css";
import { LogoImage } from "../../assets";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header  flex-1 ">
      <div className="max-w-screen-xl items-center mx-auto">
        <nav className="navbar ">
          <div className="">
            <a className="cursor-pointer">
              <img src={LogoImage} className="logoImage" />
            </a>

            {/* <a className="logo">DeeptiEnterprise</a> */}
          </div>
          <ul
            className={classNames("ullist  lg:flex", {
              "hidden sm:hidden": !isDrawerOpen, // Hide on small/medium screens if the drawer is closed
              "block sm:block": isDrawerOpen,
            })}
          >
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <span className="nav-text">HOME</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <span className="nav-text">ABOUT</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <span className="nav-text">INVESTOR RELATIONS</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <span className="nav-text">CORPORATE GOVERNANCE</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <span className="nav-text">CONTACT US</span>
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="hamburger-btn lg:hidden absolute top-6 right-10 " /* Hide the button on larger screens */
          onClick={toggleDrawer}
        >
          {/* Hamburger Icon */}
          <span className="hamburger-icon">☰</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
