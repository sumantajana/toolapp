import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
function Footer() {
    return <footer className="footer-section footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 text-center text-lg-left mb-4 mb-lg-0">
                    <Link to="/">
                        <img className="img-fluid" src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="col-lg-8 align-self-center mb-5">
                    <ul className="list-inline text-lg-right text-center footer-menu">
                        <li className="list-inline-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="col-12">
                    <ul className="list-inline text-lg-right text-center social-icon">
                        <li className="list-inline-item">
                            <a className="facebook" href="#"><i className="ti-facebook"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="twitter" href="#"><i className="ti-twitter-alt"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="linkedin" href="#"><i className="ti-linkedin"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="black" href="#"><i className="ti-github"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
}
export default Footer;