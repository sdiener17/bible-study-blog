import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/homepage/HomePage";
import AboutPage from "./components/aboutpage/AboutPage";

export default function App() {
  // const [isSurveySubmitted, setIsSurveySubmitted] = useState(false);
  // const [userAnswers, setUserAnswers] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    //setIsLoggedIn(false);
  },[])

  // if(!isLoggedIn){
  //   return(
  //     <LoginPage setIsLoggedIn={setIsLoggedIn}/>
  //   )
  // }
  

  return (
    <PageWrapper>

        <Header />
          <div className="contentContainer">
            {/* <NavBar /> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Routes>
              <Route
                exact
                path="/"
                element={<HomePage/>}
              />

              <Route
                exact path="/about"
                element={<AboutPage/>}
                />          

            </Routes>
          </div>
        <div className="separaterBottomFooter" />
        <Footer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  .separaterBottomFooter {
    margin-bottom: 60px;
  }
  //display:flex;
  height: 100%;
  .routeLeft{
    display:flex;
    justify-content: left !important;
  }
  .routeCenter{
    display:flex;
    justify-content: center !important;
  }
  .contentWrapper {
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center; */
  }
`;
