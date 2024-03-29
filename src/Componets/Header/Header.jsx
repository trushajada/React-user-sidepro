import React from "react";
import { Container } from 'react-bootstrap';
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoMdLock } from "react-icons/io";
import { FaFacebookF, FaUserPlus, FaTwitter, FaGoogle, FaInstagram, FaPinterestP } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      {/* top bar section */}
      <div id="top-bar-3">
        <Container>
          <div className="row">
            <div className="d-md-block d-none col-md-4 col-lg-4 col-xl-4">
              <div className="top-bar-3-item">
                <ul className="list-unstyled info-list">
                  <li className="fw-medium"><span className="fs-4 me-1 text-warning"><MdLocationOn /></span>29 Land St, Lorem City, CA</li>
                  <li className="fw-medium"><span className="fs-4 me-1 text-warning"><IoCallSharp /></span>+00 123 4567</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-xl-4 text-center">
              <div className="top-bar-3-item">
                <h2 className="logo-title big"><span className="text-warning">STAR</span>HOTEL</h2>
                <ul className="list-unstyled list-inline icon-list text-center">
                  <li className="list-inline-item me-4"><span><FaFacebookF /></span></li>
                  <li className="list-inline-item me-4"><span><FaTwitter /></span></li>
                  <li className="list-inline-item me-4"><span><FaPinterestP /></span></li>
                  <li className="list-inline-item me-4"><span><FaGoogle /></span></li>
                  <li className="list-inline-item me-4"><span><FaInstagram /></span></li>
                </ul>
              </div>
            </div>

           
            <div className="col-md-4 col-lg-4 col-xl-4 ">
                        <div className="top-bar-3-item ">
                            <ul className="list-unstyled list-inline info-list circle-ic text-center text-sm-center text-xl-center">
                               
                                <li className="list-inline-item ms-5 me-4"><span className="h5 "><h5><IoMdLock/></h5></span>
                                        <p >Login</p>
                                 </li>
                                 <li className="list-inline-item " ><span className="h5 "><h5><FaUserPlus/></h5></span>
                                        <p>Sign Up</p>
                                </li>
                            </ul>
                        </div>
            </div>
          </div>
        </Container>
      </div>



      {/* header */}
      <nav className="navbar navbar-expand-xl navbar-custom sticky-top header-4 landing-page p-4 " id="main_navbar">
        <Container>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav ">
              <li className="nav-item nav-padding fw-bold me-4" id="nav"><a className="nav-link" href="#landing-page-body">Home</a></li>
              <li className="nav-item nav-padding fw-medium me-4" id="nav"><a className="nav-link" href="#about-3">About Us</a></li>
              <li className="nav-item nav-padding fw-medium me-4" id="nav"><a className="nav-link" href="#rooms-2">Our Rooms</a></li>
              <li className="nav-item nav-padding fw-medium me-4" id="nav"><a className="nav-link" href="#our-gallery">Gallery</a></li>
              <li className="nav-item nav-padding fw-medium me-4" id="nav"><a className="nav-link" href="#pricing-2">Pricing</a></li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Header;
