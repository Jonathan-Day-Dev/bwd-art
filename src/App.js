import "./App.css";

import { useSelector } from "react-redux";
import { Fragment } from "react";

import Navbar from "./components/Nav/Navbar";
import Header from "./components/Layout/Header";
import WhatsNew from "./components/Layout/WhatsNew";
import Features from "./components/Layout/Features";
import Footer from "./components/Layout/Footer";

import AboutUs from "./components/About/AboutUs";
import Donate from "./components/Donate/Donate";

function App() {
  const page = useSelector((state) => state.page.page);

  return (
    <div className="App">
      <Navbar />
      <Header />
      {page === "Home" && (
        <Fragment>
          <WhatsNew />
          <Features />
        </Fragment>
      )}
      {page === "About" && (
        <Fragment>
          <AboutUs />
        </Fragment>
      )}
      {page === "Donate" && (
        <Fragment>
          <Donate />
        </Fragment>
      )}
      <Footer />
    </div>
  );
}

export default App;
