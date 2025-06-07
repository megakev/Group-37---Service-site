import React from "react";
import { Accordion, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
function Contact() {
    return (
        <div>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="text-center mb-4">
                <h2>Contact Us</h2>
            </div>

            <div>
                <div className="mb-4">
                    <h4>Our Location</h4>
                    <div>
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.1177607822623!2d-75.68045970461401!3d45.419906596785886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a74fac7013%3A0x347e8ee96695c601!2sSite%20-%20Faculty%20of%20Engineering!5e0!3m2!1sen!2sca!4v1748740912740!5m2!1sen!2sca" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <p>
                            <strong>Phone:</strong> (613) 123-4567
                        </p>
                        <p>
                            <strong>Opening Hours:</strong> Monday to Saturday, 9:00 AM to 9:00 PM
                        </p>
                    </div>
                </div>
            </div>

    
        </div>
    );
}
export default Contact;