import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

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
                    courses.map(course => <Col key={course.id}>
                        <Card className="card-height">
                            <Card.Img variant="top" src={course.image} className="course-img" />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {course.subtitle}
                                </Card.Text>
                            </Card.Body>
                            <button type="button" class="btn btn-outline-warning homepage-btn">Enjoy it in only at ${course.fee}</button>
                        </Card>
                    </Col>)
                }
            </Row>

            <div >
                <div class="hero-text py-5">
                    <Link to="/service">
                        <button>View More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;


