import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('./courseData.JSON');
                const data = await res.json();
                setCourses(data.slice(0, 3))
            }
            catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [])

    return (
        <div className="container-fluid hero-image">
            <h1 className="mb-5 pt-5 text-white fw-bolder">Get Your <span className="orange-bg">Education</span> Today!</h1>

            <Row xs={1} md={3} className="g-4" >
                {
                    courses.map(course => <Col >
                        <Card className="card-height">
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {course.subtitle}
                                </Card.Text>
                            </Card.Body>
                            <h5>Enjoy it in only at ${course.fee}</h5>
                        </Card>
                    </Col>)
                }
            </Row>

            <div >
                <div class="hero-text py-5">
                    <button>View More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;


