import classNames from "classnames";
import { useRef, useState } from "react";

import "./Styles.css";
import { LogoImage } from "../../assets";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hover, setIsHover] = useState<"Segments" | "Clients" | null>(null);
  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const id = useRef<number | null>(null);
  const ourClients = [
    {
      id: 1,
      clientName: "Shalby Hospital",
      link: "https://www.shalby.org/hospitals/indore-shalby/",
    },
    {
      id: 2,
      clientName: "CHL Care hospital",
      link: "https://www.carehospitals.com/indore/",
    },
    {
      id: 3,
      clientName: "Lupin Diagnostics",
      link: "https://www.lupindiagnostics.com/",
    },
    {
      id: 4,
      clientName: "Sodani Diagnostics",
      link: "https://www.sampurna.care/",
    },
    { id: 5, clientName: "Endocrine laboratory" },
    {
      id: 6,
      clientName: "Unipath laboratory",
      link: "https://www.unipath.in/",
    },
  ];
  const productDeatil = [
    { id: 1, productName: "Biochemistry" },
    { id: 2, productName: "Haematology" },
    { id: 3, productName: "Molecular Biology" },
    { id: 4, productName: "Immunology" },
    { id: 5, productName: "Coagulation" },
  ];
  const handleOnHover = (value: "Segments" | "Clients") => {
    id?.current && clearTimeout(id?.current);

    id.current = setTimeout(() => {
      setIsHover(value);
    }, 200);
  };
  const handleMouseLeave = () => {
    id?.current && clearTimeout(id?.current);
    id.current = setTimeout(() => {
      setIsHover(null);
    }, 200);
  };
  return (
    <header className="header  flex-1 ">
      <div className="max-w-screen-xl items-center mx-auto">
        <nav className="navbar ">
          <div className="flex  flex-col items-center">
            <a className="cursor-pointer">
              <img src={LogoImage} className="logoImage" />
            </a>
            <h2 className=" hidden lg:block">DEEPTI ENTERPRISES</h2>

            {/* <a className="logo">DeeptiEnterprise</a> */}
          </div>
          <ul
            className={classNames("ullist  lg:flex", {
              "hidden sm:hidden": !isDrawerOpen, //
              "block sm:block": isDrawerOpen,
            })}
          >
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <span className="nav-text">HOME</span>
              </a>
            </li>
            <li
              className="navbar-item"
              onMouseEnter={() => {
                handleOnHover("Segments");
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
            >
              <a href="#" className="nav-link">
                <span className="nav-text">SEGMENTS</span>
              </a>
              {hover === "Segments" && (
                <div className="hoverCard">
                  <ul>
                    {productDeatil?.map((item) => {
                      return (
                        <li className="hoverDetail">
                          <a href="" className="hover:text-sky-400">
                            {item?.productName}{" "}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                <span className="nav-text">OUR PRODUCT</span>
              </a>
            </li>
            <li
              className="navbar-item"
              onMouseEnter={() => {
                handleOnHover("Clients");
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
            >
              <a className="nav-link">
                <span className="nav-text">OUR CLIENTS</span>
              </a>
              {hover === "Clients" && (
                <div className="hoverCard">
                  <ul>
                    {ourClients?.map((item) => {
                      return (
                        <li className="hoverDetail">
                          <a href={item?.link} className="hover:text-sky-400">
                            {item?.clientName}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
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
          <span className="hamburger-icon">☰</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
