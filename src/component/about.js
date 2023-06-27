import React from "react";
import image from "../component/asset/about-bg.jpg";

const about = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="background-image">
          <div className="main-cuntent">
            <h1>Food point</h1>
          </div>
        </div>
      </div>
      <h1 className="text-center">About Us</h1>
      <div className="container-about">
        <div className="column">
          <img
            src={image}
            alt="about-bg"
            style={{ width: "400px", height: "360px" }}
          />
        </div>
        <div className="column">
          <h2>Falaver Resturent</h2>
          <p>
            Welcome to our website! We are a team of passionate individuals
            dedicated to providing high-quality products and services.
          </p>
          <p>
            Our mission is to create innovative solutions that meet the needs of
            our customers. With years of experience in the industry, we strive
            to deliver exceptional results and exceed expectations.
          </p>
          <p>
            At our core, we value integrity, teamwork, and customer
            satisfaction. We believe in building strong relationships with our
            clients and partners based on trust and mutual success.
          </p>
          <p>
            Explore our website to learn more about our products and services.
            If you have any questions or inquiries, please don't hesitate to
            contact us. We look forward to serving you!
          </p>
          <p>
            At our core, we value integrity, teamwork, and customer
            satisfaction. We believe in building strong relationships with our
            clients and partners based on trust and mutual success.
          </p>
          <p>
            With a diverse range of expertise, our team is committed to
            continuous learning and improvement. We stay up-to-date with the
            latest industry trends and technologies to ensure that we deliver
            cutting-edge solutions to our clients.
          </p>
        </div>
      </div>
      <div className="secuend-text">
        <p>
          With a diverse range of expertise, our team is committed to continuous
          learning and improvement. We stay up-to-date with the latest industry
          trends and technologies to ensure that we deliver cutting-edge
          solutions to our clients.
        </p>
        <p>
          Whether you're a small business owner, an entrepreneur, or an
          individual looking for reliable services, we are here to assist you.
          Our dedicated team will work closely with you to understand your
          unique requirements and provide tailored solutions that address your
          specific needs.
        </p>
        <p>
          Explore our website to learn more about our products and services. If
          you have any questions or inquiries, please don't hesitate to contact
          us. We look forward to serving you and being a part of your success
          story!
        </p>
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

export default about;
