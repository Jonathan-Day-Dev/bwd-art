import "./App.css";
import "./index.css";

import { Route, Redirect } from "react-router-dom";

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
import MemberArt from './components/MemberArt/MemberArt'
import Event from './components/Event/Event';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
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
