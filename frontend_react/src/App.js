import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Footer, Header, Services, Testimonial } from "./container";
import { Navbar } from "./components";
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          <Route path="/about" exact element={<About />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/Testimonial" exact element={<Testimonial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
