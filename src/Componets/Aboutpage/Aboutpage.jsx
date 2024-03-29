
import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiSparkfun } from "react-icons/si";
import { RiWifiOffLine } from "react-icons/ri";
const Aboutpage =()=>{
    return(
        <>
                <section id="about-3" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-heading-3">
              <h4 className="text-center text-warning mb-3">About Us</h4>
              <h2 className="text-center">Who We Are</h2>
              <p className="col-12 text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh <br /> euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <hr className="page-heading-3-line" />
            </div>

            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                <div className="about-3-block">
                  <span className="icon">
                  <GiCoffeeBeans />
                  </span>
                  <h3 className="mt-5 text-center">Restaurant</h3>
                  <p>
                    Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                <div className="about-3-block">
                  <span className="icon">
                  <SiSparkfun />
                  </span>
                  <h3 className="mt-5 text-center">SPA</h3>
                  <p>
                    Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                <div className="about-3-block">
                  <span className="icon">
                  <RiWifiOffLine />
                  </span>
                  <h3 className="mt-5 text-center">Free Wifi</h3>
                  <p>
                    Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />

        </>
    )
}
export default Aboutpage