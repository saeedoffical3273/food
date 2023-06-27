import React, { Component } from "react";
import Slider from "react-slick";
import image from "../component/asset/menu-1.jpg";
import images from "../component/asset/menu-2.jpg";
import images3 from "../component/asset/menu-3.jpg";
import images4 from "../component/asset/menu-4.jpg";
import images5 from "../component/asset/menu-5.jpg";
import images6 from "../component/asset/menu-6.webp";
import images7 from "../component/asset/menu-7.jpg";
import images8 from "../component/asset/menu-8.jpg";
import images9 from "../component/asset/menu-9.webp";
import bg from "../component/asset/menu-bg.png";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <div>
          <img
            src={bg}
            alt="menu-bg"
            style={{ width: "100%", height: "420px" }}
          />
        </div>
        <div className="slider">
          <h2>Food Menu</h2>
          <Slider {...settings}>
            <div>
              <img
                src={image}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Burger</h3>
              <h4>Price:</h4>/550
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <img
                src={images}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Ice cream</h3>
              <h4>Price:</h4>/350
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <img
                src={images3}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Juce</h3>
              <h4>Price:</h4>/190
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <img
                src={images4}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Pizza</h3>
              <h4>Price:</h4>/2550
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <img
                src={images5}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Fish</h3>
              <h4>Price:</h4>/1150
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <img
                src={images6}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Chicken</h3>
              <h4>Price:</h4>/650
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <img
                src={images7}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Cake</h3>
              <h4>Price:</h4>/550
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <img
                src={images8}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Shawarma</h3>
              <h4>Price:</h4>/110
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <img
                src={images9}
                alt="menu-1"
                style={{ width: "280px", height: "220px" }}
              />
              <h3>Hot Wings</h3>
              <h4>Price:</h4>/350
              <div>
                {" "}
                <button>Buy Now</button>
              </div>
            </div>
          </Slider>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h2>About Us</h2>
              <p>
                This is a Food website. In this, you will get the eat of every
                Food on a 25% discount.
              </p>
              <button className="get-button">Get Now</button>
            </div>
            <div className="footer-section">
              <h2>Contact</h2>
              <p>Phone: +92301-0485261</p>
              <p>Email: saeedrehman3273@gmail.com</p>
            </div>
            <div className="footer-section">
              <h2>Follow Us</h2>
              <div className="social-icons">
                <a href="#" className="icon-link">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="icon-link">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="icon-link">
                  <i className="fa fa-instagram "></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 FoodApp. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}
