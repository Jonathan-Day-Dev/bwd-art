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
import Contest from "./components/Contest/Contest";
import MemberArt from "./components/MemberArt/MemberArt";
import Event from "./components/Event/Event";
import Salon from "./components/Salon/Salon";

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
            <Salon />
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
        <Route path="/contest">
          <Contest />
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
}

export default App;
