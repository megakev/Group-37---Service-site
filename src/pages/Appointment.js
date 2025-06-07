import React from "react";
import { Form, Button, Breadcrumb, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
function Appointment(){
  return (
    <div>
        <div>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Book Appointment</Breadcrumb.Item>
            </Breadcrumb>
        </div>


        <div className="container mt-4">
        
            <div>
                <h1>Dropoff</h1>
            </div>
        
        </div>

        <div className="container my-4">

            

            <div className="row mb-4">
                <div className="col-md-8">
                    <Alert variant="warning">
                        Please note that you may be charged a Diagnostics fee
                    </Alert>
                    
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>Service</Form.Label>
                        <Form.Select>
                            <optgroup label="General Diagnostics and repair">
                            <option>Diagnostics</option>
                            <option>Repair</option>
                            </optgroup>
                            <optgroup label="Battery Replacement">
                            <option>Phone</option>
                            <option>Laptop</option>
                            </optgroup>
                            <optgroup label="Installation">
                            <option>Installing hardware</option>
                            </optgroup>
                        </Form.Select>
                        
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicissue">
                        <Form.Label>Describe Your Issue </Form.Label>
                        <Form.Control type="issue" placeholder="e.g., My laptop won't turn on, Blue Screen of Death, Slow performance..." />
                        <Form.Text className="text-muted">
                        (Be as specific as possible)
                        </Form.Text>
                    </Form.Group>
                    
               
                    <Form.Group className="mb-3">
                        <Form.Label>Preferred Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Check type="radio" label="Morning" name="time" />
                    <Form.Check type="radio" label="Afternoon" name="time" />
                    <Form.Check type="radio" label="Evening" name="time" className="mb-3" />
                    <Form.Check type="checkbox" label="I agree to the terms and conditions." className="mb-3" />
                    
                    <Button variant="primary" as={Link} to="/confirmation">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>

    </div>
  
);
}

export default Appointment;