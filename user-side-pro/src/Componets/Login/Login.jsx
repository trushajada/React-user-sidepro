import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaGoogle, FaPinterestP } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { loginpage } from "../../Services/User-action/User-action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [logininput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginInput({ ...logininput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  
    console.log(logininput);
    await dispatch(loginpage(logininput.email, logininput.password));

    setLoginInput({
      email: "",
      password: "",
    });
  };

  return (
    <>
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

      <section id="custom-form-wrapper" className="innerpage-wrapper">
        <div id="registration" className="innerpage-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="custom-form text-center">
                  <h3>LOGIN</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group className="custom mt-2">
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          className="p-2 border-3 rounded-pill"
                          value={logininput.email}
                          name="email"
                          onChange={handleLogin}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group className="custom mt-2">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="p-2 border-3 rounded-pill"
                          value={logininput.password}
                          name="password"
                          onChange={handleLogin}
                        />
                      </Form.Group>
                    </Row>

                    <Button className="loginbtn rounded-pill p-2" type="submit">
                      LOGIN
                    </Button>
                  </Form>
                  <div className="other-links">
                    <p className="link-line mt-4">
                      Already Have An Account?{" "}
                      <a href="login-1.html" className="text-warning">
                        Login Here
                      </a>
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

export default Login;
