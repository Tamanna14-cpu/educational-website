import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


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
                    myservices.map(service => <Col key={service.id}>
                        <Card className="card-height">
                            <Card.Img variant="top" className="course-img" src={service.image} />
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>
                                    {service.subtitle}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/services/${service.id}`}>
                                <button type="button" class="btn btn-outline-warning">Enroll Now</button>
                            </Link>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Services;