import React from "react";

const contact = (submit) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="background-image">
          <div className="main-cuntent">
            <h1>Food point</h1>
          </div>
        </div>
      </div>
      <div onSubmit={submit} className="flex">
        <h1>Contact</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <textarea id="textbox" col="30" rows="10" placeholder="Massege" />
        <button>Send</button>
      </div>

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
    </div>
  );
};

export default contact;
