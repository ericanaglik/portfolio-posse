import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import NavBar from "./NavBar"


class Landing extends Component {

  componentDidMount() {
    document.body.style.overflow = "visible"
  }
  componentWillUnmount(){
    document.body.style.overflow = "hidden"
  }
  render() {
    return (
  <div>
    <header className="main_header_area">
      <NavBar/>
    </header>

    <section className="banner_area">
      <div className="container">
        <div className="banner_content">
          <h2 className="wow fadeInUp animated">DREAM ★ BIG</h2>
          <h3 className="wow fadeInUp animated">
            Create your own online portfolio, completely customized to show what
            makes you unique
          </h3>
          <Link
            to="/signup"
            className="theme_btn wow fadeInUp animated"
            data-wow-delay="0.3s"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="illustration">
        <img
          src={require("./images/laptop-try.png")}
          height="420"
          alt=""
          className="wow slideInRight img_1 animated"
        />
        <img
          src={require("./images/phone-try3.png")}
          height="650"
          alt=""
          className="lfup img_2"
        />
        <img
          src={require("./images/icons-pls3.png")}
          height="320"
          alt=""
          className="wow slideInRight img_new"
        />
      </div>
    </section>

    <section className="experience_area">
      <div className="container">
        <div className="tittle">
          <h4>
            <i className="fa fa-clock"></i>Fast Setup
          </h4>
          <h2>
            <b>Our Process is as easy as 1, 2, 3!</b>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="experience">
              <div className="icons wow zoomIn animated">
                <span></span>
              </div>
              <Link to="#" className="heading">
                Create an Account
              </Link>
              <p>
                Choose a custom domain name where people can find your
                portfolio. Track analytics to see how often your portfolio is
                visited
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="experience">
              <div className="icons icons_2 wow zoomIn animated">
                <span></span>
              </div>
              <Link to="#" className="heading">
                Choose Your Template
              </Link>
              <p>
                We have a number of modern templates to choose from, so that you
                can ensure your personality shines through your new portfolio
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="experience">
              <div className="icons icons_3 wow zoomIn animated">
                <span></span>
              </div>
              <Link to="#" className="heading">
                Show Off Your Work
              </Link>
              <p>
                Tell us about you and your work, upload your projects, and we
                will create your custom portfolio in seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer_area">
      <div className="container">
        <div className="footer_inner row">
          <div className="col-lg-4 col-sm-6 footer_logo wow fadeIn">
            <Link to="index.html">
              <img src={require("./images/pplogo.png")} height="80" alt="" />
            </Link>
            <div className="language">
              <h6>Language :</h6>
              <div className="language_select">
                <select className="post_select">
                  <option>English (US)</option>
                  <option>English (UK)</option>
                </select>
              </div>
            </div>
            <ul className="footer_social" style={{ paddingTop: 30 }}>
              <li>
                <Link to="#">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-skype"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-slack"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-dribbble"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer_widget col-lg-2 col-sm-6 wow fadeIn"
            data-wow-delay="0.2s"
          >
            <h4>Core Link</h4>
            <ul className="footer_nav">
              <li>
                <Link to="#">Explore</Link>
              </li>
              <li>
                <Link to="#">Example Templates</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </div>
          <div
            className="footer_widget fw_2 col-lg-3 col-sm-6 wow fadeIn"
            data-wow-delay="0.4s"
          >
            <h4>Contact</h4>
            <p>insert something ehre</p>
          </div>
          <div
            className="footer_widget fw_3 col-lg-3 col-sm-6 wow fadeIn"
            data-wow-delay="0.6s"
          >
            <h4>Stay In The Loop</h4>
            <p>Subscribe to receive news on new templates and updates</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="What’s Your email"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-caret-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="copy_right">
          <div className="row">
            <div className="col-md-6  wow slideInRight">
              <ul className="mobile_icon">
                <li>
                  <Link to="#" className="theme_btn apple">
                    <i className="fab fa-apple"></i>Apple
                  </Link>
                </li>
                <li>
                  <Link to="#" className="theme_btn">
                    <i className="fab fa-google-play"></i>Google
                  </Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-6 order-md-first  wow slideInLeft">
              <p>
                © 2020 &nbsp;
                <Link to="#">Portfolio Posse</Link> &nbsp;
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
    }
  };

export default Landing;