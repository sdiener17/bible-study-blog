import React from "react";
//import {FaBars} from 'react-icons/fa';
import styled from "styled-components";

export default function Footer() {
  return (
    <FootWrapper>
      <div className="FooterMain">
        <p className="text-1">Copyright Things</p>
      </div>
    </FootWrapper>
  );
}

const FootWrapper = styled.div`
  //margin-top: 60px;
  .FooterMain {
    display: flex;
    align-items: center;
    vertical-align: bottom;
    justify-content: center;
    flex-direction: row;
    //max-width: 1600px;
    //margin: 5 auto;
    position: -webkit-sticky;
    position: sticky;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 80px;
    //padding: 1rem 1.5rem;
    background: var(--primaryAccentColor);
    border-bottom: 5px solid var(--softBlack);
    z-index: 999;
    color: var(--softBlack);
  }
  .text-1{
    margin-right:10px;
  }
  .audio-player{
    max-height:40px;
  }

  @media screen and (max-width: 500px) {
    .FooterMain {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
`;
