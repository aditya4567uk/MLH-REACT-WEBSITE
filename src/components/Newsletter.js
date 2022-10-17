import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {


  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Contact Us</h3>
            </Col>
            <Col md={6} xl={7}>
              
                <div className="new-email-bx">
                  
                </div>
              
            </Col>
          </Row>
        </div>
      </Col>
  )
}
