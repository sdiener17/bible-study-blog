import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import mainLogo from "../images/mainLogo.jpg";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function Header() {
  document.body.style.margin = 0;
  //const history = useNavigate();

  return (
    <PageWrapper>
      <div className="headerMain">
        {/* <img src={mainLogo} className="logo" alt="GURPS Book image"></img> */}
        <div className="headerTitle">Bible Study Fun Blog</div>
        <NavBar/>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 1rem 1.5rem;
  /* background: linear-gradient(to bottom right, var(--primarySiteColor) , var(--darkSiteColor)); */
  border-top: 5px solid var(--primaryAccentColor);
  z-index: 999;
  /* width: 100%; */
  margin: 0;
  .headerMain {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    //max-width: 1500px;
    margin: 5 auto;
    width: 100%;
  }
  .headerTitle {
    font-size: 2.5rem;
    color: var(--softBlack);
    text-transform: uppercase;
    letter-spacing: 0.12rem;
  }
  .headerSub {
    display: flex;
    align-items: left;
    flex-direction: column;
    font-size: 1rem;
    color: var(--softBlack);
  }
  .logo {
    height: 50%;
    width: 10%;
  }
  .links {
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
  }
  @media screen and (max-width: 500px) {
    .headerMain {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }


`;
