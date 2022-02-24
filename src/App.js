import "./App.css";
import "./index.css";

import { Route, Redirect } from "react-router-dom";

import { Fragment } from "react";

import Navbar from "./components/Nav/Navbar";
import Header from "./components/Layout/Header/Header";
import Features from "./components/Layout/Features";
import Footer from "./components/Layout/Footer";

import AboutUs from "./components/About/AboutUs";
import Contact from "./components/Contact/Contact";
import Classes from "./components/OnlineClasses/Classes";
import MemberArt from "./components/MemberArt/MemberArt";
import Event from "./components/Event/Event";
import Daniel from "./components/Daniel/Daniel";
import Board from "./components/Board/Board";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Navbar />
      <Header />
      <div id="main">
        <Route path="/home">
          <Fragment>
            <div className="flex justify-evenly items-center;">
              <Board />
              <Daniel />
            </div>
            <Features />
          </Fragment>
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/classes">
          <Classes />
        </Route>
        <Route path="/members">
          <MemberArt />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
      </div>
      <Footer />
    </div>
  );
};

export default App;
