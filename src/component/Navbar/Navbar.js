import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;

  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(255,255,255,0.9)" : "transparent"};
  z-index: 10;
  border-radius: 2px;
  //box-shadow: 0px 1px 10px #999;
  position: fixed;
  transition: all 0.3s ease-in;

  .logo {
    font-size: 22px;
    font-weight: 800;
    padding: 15px 0;
    cursor: pointer;
    letter-spacing: 2px;
  }
  .logo_icon {
    margin-right: 10px;
    transition: 0.5s ease;
  }
  .logo:hover .logo_icon {
    transform: rotate(180deg);
    font-size: 25px;
  }
  .logo_link {
    text-decoration: none;
    color: ${({ navBackground }) =>
      navBackground ? "rgba(0,0,0,0.9)" : "#fff"};
  }
`;

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav navBackground={navBackground}>
      <div className="logo">
        <Link className="logo_link" exact to="/">
          <FontAwesomeIcon className="logo_icon" icon={faGlobe} />
          Web Template
        </Link>
      </div>
      <Burger navBackground={navBackground} />
    </Nav>
  );
};

export default Navbar;
