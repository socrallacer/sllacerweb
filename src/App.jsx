/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import { ScrollProvider } from "./Contexts/ScrollContext";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Sócrates Llácer",
  title: "Computer Science Engineer",
  email: "socrates.llacer@gmail.com",
  gitHub: "socrallacer",
  instagram: "socrates.llacer",
  linkedIn: "www.linkedin.com/in/socrates-llacer-luna",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#213a46";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <ScrollProvider>
      <div id="main">
        <Header />
        <Home name={siteProps.name} title={siteProps.title} />
        <About id="about" />
        <Portfolio />
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </ScrollProvider>
  );
};

export default App;
