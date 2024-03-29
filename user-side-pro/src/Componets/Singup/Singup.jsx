import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaGoogle, FaPinterestP } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';
import { googleprovide } from "../../Services/User-action/User-action";
import { addpagefrom } from "../../Services/User-action/User-action";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
    username:'',
    cpassword:'',
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await dispatch(addpagefrom(inputData.email, inputData.password, inputData.username));
    setInputData({
      email: '',
      password: '',
      username:'',
      cpassword:'',
    });
    navigate('/loginpage');
  
  };

  const handleGoogle = async () => {
    console.log("hellooooo");
    await dispatch(googleprovide());
    navigate('/Rhome');
  };

  return (
    <>
      {/* topbar  */}
      <div className="top-bar">
        <Container>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8">
              <div id="info">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item mt-3 text-light me-5">
                    <span className="me-2 mt-3">
                      <MdLocationOn />
                    </span>
                    29 Land St, Lorem City, CA
                  </li>
                  <li className="list-inline-item mt-3 text-light">
                    <span className="me-2 mt-3">
                      <IoCallSharp />
                    </span>
                    +00 123 4567
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <div id="links">
                <ul className="list-unstyled list-inline mt-3 text-end">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="text-light me-3">
                        <FaFacebookF />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="text-light me-3">
                        <FaTwitter />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="text-light me-3">
                        <FaGoogle />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="text-light me-3">
                        <FaPinterestP />
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <form>
                      <div className="form-group">
                        <select className="form-control">
                          <option value="">EN</option>
                          <option value="">UR</option>
                          <option value="">FR</option>
                          <option value="">IT</option>
                        </select>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* form page */}
      <section id="custom-form-wrapper" className="innerpage-wrapper">
        <div id="registration" className="innerpage-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="custom-form text-center">
                  <h3>Register</h3>
                  <Form onSubmit={handlesubmit}>
                    <Row className="mb-3">
                      <Form.Group className="custom mt-5">
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          className="p-2 border-3 rounded-pill"
                          value={inputData.username}
                          name="username"
                          onChange={handlechange}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group className="custom mt-2">
                        <Form.Control
                          type="text"
                          placeholder="email"
                          className="p-2 border-3 rounded-pill"
                          value={inputData.email}
                          name="email"
                          onChange={handlechange}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group className="custom mt-2">
                        <Form.Control
                          type="text"
                          placeholder="password"
                          className="p-2 border-3 rounded-pill"
                          value={inputData.password}
                          name="password"
                          onChange={handlechange}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group className="custom mt-2">
                        <Form.Control
                          type="text"
                          placeholder="confirm password"
                          className="p-2 border-3 rounded-pill"
                          value={inputData.cpassword}
                          name="cpassword"
                          onChange={handlechange}
                        />
                      </Form.Group>

                    </Row>
               
                    <GoogleButton onClick={handleGoogle} className="custom  mt-4 mb-5"></GoogleButton>

                    <Button className="loginbtn rounded-pill p-2" type="submit">REGISTER</Button>
                  </Form>
                  <div className="other-links">
                    <p className="link-line mt-4">
                      Already Have An Account ? <a href="login-1.html" className="text-warning">Login Here</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
