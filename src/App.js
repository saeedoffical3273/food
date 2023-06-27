import React from "react";
import Navbar from "./Navbar";
import css from "./Navbar.css";
import "./App.css";
import menu from "./component/menu";
import Footer from "./component/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Meal from "./component/meal";

const App = () => {
  return (
    <div className="APP">
      <Navbar />
      <div className="container-fluid">
        <div className="background-image">
          <div className="main-cuntent">
            <h1>Food point</h1>
          </div>
        </div>
      </div>
      <Meal />
      <Footer />
    </div>
  );
};

export default App;
