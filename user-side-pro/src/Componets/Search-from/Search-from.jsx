import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    const navigate =useNavigate();

    const handlesubmit=()=>{
        navigate('/Singpage')
    }

    return (
        <>

        <section className="search-form search-style p-5">
                <div className="container">
                    <form>
                        <div className="row">
                            
                            <div className="col-12 col-md-12 col-lg-6 col-xl-5">
                                <div className="row">
                                
                                    <div className="col-12 col-md-6">
                                   
                                   <input onClick={handlesubmit} placeholder="CHEAKIN " className="text-center p-2"> 
                                
                                   </input>
                                        
                                    </div>
                                    
                                    <div className="col-12 col-md-6">
                                    <input onClick={handlesubmit} placeholder="CHEAKOUT " className="text-center p-2"> 
                                
                                </input>
                                       
                                    </div>
    
                                </div>							
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 col-xl-5">
                                <div className="row">
                                
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="form-group right-icon">
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Select defaultValue="Choose..." className="p-2">
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
                                            <Form.Select defaultValue="Choose..." className="p-2">
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
                                            <Form.Select defaultValue="Choose..." className="p-2">
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

                                    
                                    
                                  
                                </div>
                            </div>
                         
                            <div className="col-12 col-md-12 col-lg-12 col-xl-2  text-center ">
                             
                             <Button className="bg-warning fw-bold p-2 border-warning " >SEARCH</Button>
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
}

export default SearchForm;
