import React, { Fragment, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 20;

  li {
    padding: 18px 25px;
  }

  .navlink {
    text-decoration: none;
    color: ${({ navBackground }) =>
      navBackground ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)"};
    font-size: 20px;
    font-weight: 800;
    padding-bootom: 5px;
  }
  .navlink:hover {
    color: ${({ navBackground }) =>
      navBackground ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,1)"};
  }

  .activeNav {
    color: ${({ navBackground }) =>
      navBackground ? "rgba(0,0,0,0.9)" : "rgba(255, 255, 255, 1)"};
    padding-bottom: 7px;
    border-bottom: 3px solid
      ${({ navBackground }) =>
        navBackground ? "rgba(0,0,0,0.9)" : "rgba(255, 255, 255, 1)"};
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .navlink {
      color: rgba(255, 255, 255, 0.7);
    }
    .activeNav {
      color: rgba(255, 255, 255, 1);
      padding-bottom: 7px;
      border-bottom: 3px solid rgba(255, 255, 255, 1);
    }
    .navlink:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const RightNav = ({ open, toggler }) => {
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

  const sliderClose = () => {
    if (open) {
      toggler();
    }
  };

  return (
    <Fragment>
      <Ul open={open} navBackground={navBackground}>
        <li>
          <NavLink
            activeClassName="activeNav"
            className="navlink"
            onClick={sliderClose}
            exact
            to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="activeNav"
            className="navlink"
            exact
            onClick={sliderClose}
            to="/aboutus">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="activeNav"
            className="navlink"
            exact
            onClick={sliderClose}
            to="/contactus">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="activeNav"
            className="navlink"
            exact
            onClick={sliderClose}
            to="/signin">
            Sign In
          </NavLink>
        </li>
      </Ul>
    </Fragment>
  );
};

export default RightNav;
