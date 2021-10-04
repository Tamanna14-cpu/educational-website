import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Services = () => {

    const [myservices, setMyservices] = useState([]);

    useEffect(() => {
        async function serviceData() {
            try {
                const res = await fetch('./courseData.JSON');
                const data = await res.json();
                setMyservices(data.slice(0, 6))
            }
            catch (error) {
                console.log(error)
            }
        };
        serviceData();
    }, [])


    return (
        <Container>
            <h2 style={{ color: 'orange' }} className="mb-5">Our More Services You Can Enjoy!</h2>

            <Row xs={1} md={3} className="g-4">
                {
                    myservices.map(service => <Col>
                        <Card className="card-height">
                            <Card.Img variant="top" src={service.image} />
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>
                                    {service.subtitle}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Services;