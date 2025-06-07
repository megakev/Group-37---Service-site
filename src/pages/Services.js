import React from "react";
import { Card, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Services(){  
    return (
  
  <div>
        
        <div>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Services</Breadcrumb.Item>
        </Breadcrumb>   
        </div>
        
        <div className="container mt-4">
        
            <div
                className="text-center text-white d-flex align-items-center justify-content-center"
                style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/assortment-sorted-tech-objects_23-2148996917.jpg?semt=ais_items_boosted&w=740')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px"
                
                }}
            >
                <h1> Availible services</h1>
            </div>
        
        </div>
        
        
        
        <div className="container my-4">
            <div className="row text-center mb-4">
                <h2>General Diagnostics and repair </h2>
            </div>
            <div className="row align-items-center">
                {["Diagnostics", "repair"].map((service, i) => (
                    <div className="col-md-6">
                    <Card>
                        <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>Learn more about our {service.toLowerCase()} services.</Card.Text>
                        <Button variant="primary" as = {Link} to={"/appointment"}>Book Now</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
            </div>
        </div>


        <div className="container my-4">
            <div className="row text-center mb-4">
                <h2>Battery Replacement</h2>
            </div>
            <div className="row align-items-center">
                {["Phone", "Laptop"].map((service, i) => (
                    <div className="col-md-6">
                    <Card>
                        <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>Learn more about our {service.toLowerCase()} services.</Card.Text>
                        <Button variant="primary" as = {Link} to={"/appointment"}>Book Now</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
            </div>
        </div> 


        <div className="container my-4">
            <div className="row text-center mb-4">
                <h2>Installation</h2>
            </div>
            <div className="row align-items-center">
                {["Installing"].map((service, i) => (
                    <div className="col-md-6">
                    <Card>
                        <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>Learn more about our {service.toLowerCase()} services.</Card.Text>
                        <Button variant="primary" as = {Link} to={"/appointment"}>Book Now</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
            </div>
        </div>       



    </div>
  
);
}

export default Services;