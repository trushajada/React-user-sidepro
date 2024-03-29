import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Rsearch = () => {
  const [startDate, setStartDate] = useState(new Date());



  const [Roombook, setRoombook] = useState({
    cheakin: "",
    cheakout: "",
    rooms: "Choose...",
    adults: "Choose...",
    child: "Choose...",
  });

  const handleSearch = (name, value) => {
    setRoombook({ ...Roombook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
    setRoombook({
      cheakin: "",
      cheakout: "",
      rooms: "Choose...",
      adults: "Choose...",
      child: "Choose...",
    });
  };

  return (
    <>
      <section className="search-form search-style p-5">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 col-xl-5">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <DatePicker
                      placeholderText="CHECK IN"
                      className="text-center p-2"
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);
                        handleSearch("cheakin", date);
                      }}
                      value={Roombook.cheakin}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <DatePicker
                      placeholderText="CHECK OUT"
                      className="text-center p-2"
                      selected={Roombook.cheakout}
                      onChange={(date) => handleSearch("cheakout", date)}
                      value={Roombook.cheakout}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6 col-xl-5">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-4">
                    <div className="form-group right-icon">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Select
                          value={Roombook.rooms}
                          name="rooms"
                          onChange={(e) =>
                            handleSearch("rooms", e.target.value)
                          }
                          className="p-2"
                        >
                          <option>ROOMS</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-4">
                    <div className="form-group right-icon">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Select
                          name="adults"
                          value={Roombook.adults}
                          onChange={(e) =>
                            handleSearch("adults", e.target.value)
                          }
                          className="p-2"
                        >
                          <option>ADULTS</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-lg-4">
                    <div className="form-group right-icon">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Select
                          name="child"
                          value={Roombook.child}
                          onChange={(e) =>
                            handleSearch("child", e.target.value)
                          }
                          className="p-2"
                        >
                          <option>CHILDREN</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-xl-2 text-center ">
                <Button
                  className="bg-warning fw-bold p-2 border-warning "
                  type="submit"
                >
                  SEARCH
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Rsearch;
