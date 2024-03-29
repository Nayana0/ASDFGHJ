import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, submit }) => {
  const [contact , setContact] = useState('');

  {/*useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    Contact &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }*/}

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
          {/* <Col lg={12} md={6} xl={5}>
              <h3>For Any Clarification tap to Message</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{submit}</Alert>}
              {status === 'success' && <Alert variant="success">{submit}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>*/}
            <h3>President</h3>
            <h4>Dr. Rashmi</h4>
            <h7>(Prof. & Head, EEE</h7>
            <h5>+91 7619481923 </h5>
            
           
          </Row>
        </div>
      </Col>
  )
}
