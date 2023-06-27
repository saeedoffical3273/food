import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            This is a Food website. In this you will get the eat of every Food
            on 25% discount.
          </p>
          <button className="get-button"> Get Now</button>
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
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="icon-link">
              <i class="fa fa-instagram "></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 FoodApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
