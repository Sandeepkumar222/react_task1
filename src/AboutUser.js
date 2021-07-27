import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Accordion, Card } from "react-bootstrap";
import axios from "axios";
import {useRouteMatch} from 'react-router-dom'

const AboutUser = () => {
    const match = useRouteMatch();
    const [User, setUser] = useState(match.params.Id);
  const [Data, setData] = useState("");
  
  console.log(match)
  

    

  let getData = async () => {
    try {
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${User}`
      );
      setData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    setUser("");
  };

  const handleChange = ({ target: { value } }) => setUser(value);

  return (
    <>
    <br></br>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Enter the Id of User</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter id"
                value={User}
                onChange={handleChange}
              />
            </div>
            <Button variant="primary" type="submit" onClick={getData}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container >
      <br></br>
      <div className="container-md">
       {Data? <Accordion variant = "primary">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Details
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <p className="text-left font-weight-light ">
                        id : <span className="font-weight-normal "> {Data.id}</span>
                      </p>
                    </Col>
                    <Col>
                      <p className="text-left font-weight-light ">
                        Name : <span className="font-weight-normal "> {Data.name}</span>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="text-left font-weight-light ">
                        Email : <span className="font-weight-normal "> {Data.email}</span>
                      </p>
                    </Col>
                    <Col>
                      <p className="text-left font-weight-light ">
                        Address : <span className="font-weight-normal ">{Data.address.suite}, {Data.address.street},{Data.address.zipcode},</span>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="text-left font-weight-light ">
                        Company : <span className="font-weight-normal "> {Data.company.name}</span>
                      </p>
                    </Col>
                    <Col>
                      <p className="text-left font-weight-light ">
                        Company : <span className="font-weight-normal ">{Data.website}</span>
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          
        </Accordion> : ""}
      </div>
      <br></br>
    </>
  );
};
export default AboutUser;
