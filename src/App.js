import "./App.css";
import "./index.css";

import { Route } from "react-router-dom";

import { Fragment } from "react";

import Navbar from "./components/Nav/Navbar";
import Header from "./components/Layout/Header";
import WhatsNew from "./components/Layout/WhatsNew";
import Features from "./components/Layout/Features";
import Footer from "./components/Layout/Footer";

import AboutUs from "./components/About/AboutUs";
import Donate from "./components/Donate/Donate";
import Contact from "./components/Contact/Contact";
import Calendar from "./components/Calendar/Calendar";
import Membership from "./components/Membership/Membership";
import Classes from "./components/OnlineClasses/Classes";
import Contest from "./components/Contest/Contest";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Navbar />
        <Header />
        <div>
          <Route path="/home">
            <Fragment>
              <Features />
              <WhatsNew />
            </Fragment>
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/membership">
            <Membership />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/contest">
            <Contest />
          </Route>
        </div>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
