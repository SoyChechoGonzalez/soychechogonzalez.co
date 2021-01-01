import React, { useState } from "react";
import { Link } from "react-router-dom";
//
// External Files
import { Sidebar } from "./Sidebar.jsx";
import "./Navbar.css";
//
// Icons
//
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
//import { ImWhatsapp } from "react-icons/im";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="/">
            <FaBars onClick={showSidebar} className="menu-bars" />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/">
                <AiOutlineClose className="menu-bars" />
              </Link>
            </li>
            <div>
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
