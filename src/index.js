import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./component/about";
import Menu from "./component/menu";
import Contact from "./component/contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
