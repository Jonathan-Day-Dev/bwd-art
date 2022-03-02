import "./App.css";
import "./index.css";

import { Route, Routes } from "react-router-dom";

import { Fragment } from "react";

import AppBar from "./components/Nav/Scroll";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/UI/Theme";
import Box from '@mui/material/Box';

import Banner from "./components/Layout/Header/Banner";
import Features from "./components/Layout/Features";
// import Footer from "./components/Layout/Footer";
import MuiFooter from "./components/Layout/Footer/Footer"

import AboutUs from "./components/About/AboutUs";
import Contact from "./components/Contact/Contact";
import Classes from "./components/OnlineClasses/Classes";
import MemberArt from "./components/MemberArt/MemberArt";
import Event from "./components/Event/Event";
import Daniel from "./components/Daniel/Daniel";
import Board from "./components/Board/Board";
import Programs from "./components/Event/Programs";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar />
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Box sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row"},
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}>
                  <Board />
                  <Daniel />
                </Box>
                <Features />
              </Fragment>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/members" element={<MemberArt />} />
          <Route path="/event" element={<Event />} />
          <Route path="/programs" element={<Programs />} />
          {/* </div> */}
        </Routes>
        {/* <Footer /> */}
        <MuiFooter />
      </div>
    </ThemeProvider>
  );
};

export default App;
