import React from "react";
import { Accordion, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
function FAQ() {
    return (
                    <div>
                        <h3 className="mb-3">FAQ</h3>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Do you charge for diagonostics?</Accordion.Header>
                                <Accordion.Body>
                                    Yes in most cases there is a small fee for us to find the problem, however depending on the severity of the issue you may not be charged if it can resolved fast enough (less then 1h)
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you accept walk-in?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, we accept walk-in, but appointments are recommended and we may take longer to get to you.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How long will my repair take?</Accordion.Header>
                                <Accordion.Body>
                                    That depends on the parts needed, in most cases battery replacements and hardware installations can be done on the day of drop off but for repairs times will vary depending on the damage
                                </Accordion.Body>
                            </Accordion.Item>
                             <Accordion.Item eventKey="3">
                                <Accordion.Header>Will I have to pay for replacement parts?</Accordion.Header>
                                <Accordion.Body>
                                    Yes you will have to pay for any required replacement part, we will always call to confirm before installation
                                </Accordion.Body>
                            </Accordion.Item>
                             <Accordion.Item eventKey="4">
                                <Accordion.Header>I need my Laptop ASAP can i get it fixed faster?</Accordion.Header>
                                <Accordion.Body>
                                   We will always try and return your device as quickly as possible. Give us a call if its urgent!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
               
            );
        }
        export default FAQ;