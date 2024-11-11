import classNames from "classnames";
import { useRef, useState } from "react";

import "./Styles.css";
import { LogoImage } from "../../assets";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hover, setIsHover] = useState<
    "Home" | "Segments" | "Clients" | "ContactUs" | null
  >(null);
  const [segmentHover, setSegmentHover] = useState<"Mission & Vision" | null>(
    null
  );
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
  const Home = [
    { id: 1, homeSegments: "Our Home" },
    { id: 2, homeSegments: "Mission & Vision" },
    { id: 3, homeSegments: "Our Partner" },
  ];
  const contactUs = [
    { id: 1, email: "info@deeptienterprises.co.in" },
    { id: 2, email: "deeptienterprises@rediffmail.com" },
  ];
  const handleOnHover = (
    value: "Segments" | "Clients" | "ContactUs" | "Home"
  ) => {
    id?.current && clearTimeout(id?.current);

    id.current = setTimeout(() => {
      setIsHover(value);
    }, 200);
  };
  const handleSegmentHover = (value: any) => {
    id?.current && clearTimeout(id?.current);

    id.current = setTimeout(() => {
      setSegmentHover(value);
    }, 200);
  };
  const handleMouseLeave = () => {
    id?.current && clearTimeout(id?.current);
    id.current = setTimeout(() => {
      setIsHover(null);
      setSegmentHover(null);
    }, 200);
  };
  const missionVision = () => {
    console.log("here");

    return (
      <div className="segmentCard">
        <h1 className="flex flex-col items-center "> MISSION & VISION</h1>
        <h2 className="text-sky-500"> OUR MISSION </h2>
        <h4 className="text-black mt-2">
          {" "}
          Health is a state of body. Wellness is a state of being. – J Stanford
          To provide latest and superior technologies available at affordable
          cost and effective logistic management system so as to allow our
          esteemed customer to deliver tests results with utmost accuracy &
          precision every time in shortest possible TAT at most affordable
          prices.
        </h4>
        <h2 className="text-sky-500 mt-4">OUR VISION</h2>
        <h4 className="text-black mt-2">
          {" "}
          There's nothing more important than good health - that's our principal
          capital asset. - Arlen Specter To become a leader in providing
          holistic services & quality tools at reasonable cost, which enable our
          esteemed Diagnostic service provider to deliver test services to
          patients at affordable price. Steadfast with a dedicated team of
          committed professionals zealous to improve healthcare services through
          practice and innovation.
        </h4>
        <h1 className="mt-5">
          Deepti enterprises endeavours to extend services in all healthcare
          units, from a remote micro lab to referral pathology laboratory,
          covering a range of over 1500 tests in the mentioned disciplines using
          latest technology and equipment:
          <h2 className="mt-2">Biochemistry</h2>
          <h2>Haematology</h2> <h2> Molecular</h2>
          <h2> Biology Clinical Pathology</h2>
        </h1>
      </div>
    );
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
            <li
              className="navbar-item"
              onMouseEnter={() => {
                handleOnHover("Home");
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
            >
              <a href="#" className="nav-link">
                <span className="nav-text">HOME</span>
              </a>
              {hover === "Home" && (
                <div className="hoverCard">
                  <ul>
                    {Home?.map((item) => {
                      return (
                        <li
                          className="hoverDetail"
                          onMouseEnter={() => {
                            handleSegmentHover(item?.homeSegments);
                          }}
                          // onMouseLeave={() => {
                          //   handleMouseLeave();
                          // }}
                        >
                          <a href="" className="hover:text-sky-400 ">
                            {item?.homeSegments}{" "}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {segmentHover === "Mission & Vision" && missionVision()}
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
            <li
              className="navbar-item"
              onMouseEnter={() => {
                handleOnHover("ContactUs");
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
            >
              <a href="#" className="nav-link">
                <span className="nav-text">CONTACT US</span>
              </a>
              {hover === "ContactUs" ? (
                <div className="hoverCard">
                  <ul>
                    {contactUs.map((item) => {
                      return (
                        <li className="hoverDetail">
                          <a
                            href={`mailto:${item?.email}`}
                            className="hover:text-sky-400"
                          >
                            {item?.email}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
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
