import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const StyledBottomNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;

    width: 100%;
    background-color: #fff;
    position: sticky;
    bottom: 0;
    padding: 10px 0;

    .contact_bar {
      display: flex;
      justify-content: space-around;
    }
    .conact_link {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.7);
      font-size: 26px;
    }
  }
`;
const BottomNav = () => {
  return (
    <StyledBottomNav>
      <div className="contact_bar">
        <span>
          <a target="_blank" href="tel:+919400000000" className="conact_link">
            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="mailto:mailaddress@gmail.com"
            className="conact_link">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="https://goo.gl/maps/HYDkPMoRcXnsnif6A"
            className="conact_link">
            <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
          </a>
        </span>
      </div>
    </StyledBottomNav>
  );
};
export default BottomNav;
