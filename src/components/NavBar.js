import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  //var to get the current page the user is on for highlighting that page
  //on the navbar
  let pageName = location.pathname.replaceAll("/", "");
  const [homeLit, setHomeLit] = useState(false);
  const [registerLit, setRegisterLit] = useState(false);
  //the current page the user is on. If they're on the homepage, replace
  //the empty string with "home", otherwise use 'pageName'
  const [currentPage, setCurrentPage] = useState(
    pageName === "" ? "home" : pageName
  );
  return (
    <SideWrapper>
      <ul>
        <li key={1}>
          <Link
            to="/"
            className={
              "sidebar-link " + (currentPage === "home" ? "lit" : "unlit")
            }
            id="homeLink"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={
              "sidebar-link " + (currentPage === "about" ? "lit" : "unlit")
            }
            id="aboutLink"
            onClick={() => setCurrentPage("about")}
          >
            About
          </Link>

        </li>
      </ul>
    </SideWrapper>
  );
}

const SideWrapper = styled.nav`
  display: flex;
  transition: var(--mainTransition);
  font-size: 20px !important;

  margin: 10px;
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    //display: block;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    font-size: 20px;
    //transition: var(--mainTransition);
    text-decoration: none;
    color: var(--softBlack);
    //width: 80%;
  }
  .sidebar-link:hover {
    //padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    text-decoration: none;
    border-bottom: 2px solid var(--softBlack);
  }
  .lit {
    border-bottom: 2px solid var(--softBlack);
  }
  .unlit {
    background: none;
  }
`;
