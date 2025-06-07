import React from "react";
import { Link } from 'react-router-dom';
import { Breadcrumb, Carousel, Card, Button } from "react-bootstrap";

function Home() {
    return (
        <div>
            <div class="text-center">
                <Carousel>
                    <Carousel.Item>
                        
                        <img
                            className="d-block w-90"
                            src="https://img.freepik.com/free-photo/close-up-man-repairing-computer-chips_23-2150880997.jpg?semt=ais_items_boosted&w=740"
                            alt="First slide"
                            class="img-fluid"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-90"
                            src="https://img.freepik.com/free-photo/young-woman-cleaning-her-laptop-key-board_23-2149402395.jpg?semt=ais_items_boosted&w=740"
                            alt="Second slide"
                            class="img-fluid"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-90"
                            src="https://img.freepik.com/premium-photo/laptop-repair-workplace-repair-computer_106035-95.jpg?semt=ais_items_boosted&w=740"
                            alt="Third slide"
                            class="img-fluid"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container my-4">
                <h1 style={{ textAlign: "center" }}>Welcome to Hardware Heroes</h1>
                <h4 style={{ textAlign: "center" }}>Tech Rescue at Its Swiftest</h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/appointment" className="btn btn-primary">Request a Dropoff</Link>
                </div>
            </div>

            <div className="container pt-4"></div>

            <div className = "container my-4">

                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img className="d-block w-100" 
                        src = "https://img.freepik.com/free-photo/network-mainboard-service-toy-broadcasting_1286-290.jpg?semt=ais_items_boosted&w=740"  alt="slide"/> 
                         
                    </div>
                    <div className="col-md-5">
                        <h3>
                            About Hardware Heroes
                        </h3>
                        <p>
                            At our Hardware Heroes, we are committed to providing you with the quickest and highest quality repairs in the city
                        </p>
                        <Link to="/services" className="btn btn-primary"> 
                            Find out more
                        </Link>
                        
                    </div>
                </div>

            </div>
       

            <div className="container my-5" style={{ backgroundColor: "#d0f0fd", padding: "20px", borderRadius: "8px" }}>
                <div className="row pb-3">
                    <h2 style={{ textAlign: "center" }}>Our Services</h2>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src= "https://img.freepik.com/free-photo/sideways-man-repairing-computer_23-2148419165.jpg?semt=ais_items_boosted&w=740" style={{ height: "200px" }}/>
                        <Card.Body>
                            <Card.Title>General Diagnostics and repair </Card.Title>
                            <Card.Text>
                            We provide comprehensive general repair services for all your technological needs
                            </Card.Text>
                            <Button variant="primary" as = {Link} to="/services">Learn More</Button>
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img 
                            variant="top" 
                            src="https://img.freepik.com/premium-photo/technician-repairing-broken-smartphone-desk_77206-93.jpg?semt=ais_items_boosted&w=740"
                            style={{ height: "200px" }}
                        />
                        <Card.Body>
                            <Card.Title>Battery Replacement</Card.Title>
                            <Card.Text>
                           Need a new phone or laptop battery? We got you!
                            </Card.Text>
                            <Button variant="primary" as = {Link} to="/services">Learn More</Button>
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/close-up-male-technician-hand-s-installing-heatsink-computer-main-board_23-2147883804.jpg?semt=ais_items_boosted&w=740" style={{height: "200px"}}/>
                        <Card.Body>
                            <Card.Title>Instalation</Card.Title>
                            <Card.Text>
                            Need help installing that new piece of hardware?
                            </Card.Text>
                            <Button variant="primary" as = {Link} to="/services">Learn More</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>    

            </div>
        </div>
    );
}

export default Home;