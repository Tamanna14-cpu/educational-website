import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import './Event.css';

const Events = () => {

    const [Events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('./courseData.JSON');
                const data = await res.json();
                setEvents(data.slice(6, 10))
            }
            catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [])


    return (
        <div>
            <Container>
                <h2 style={{ color: 'orange' }} className="mb-5">Upcoming Events...</h2>

                {
                    Events.map(event => <Card key={event.id} className="mb-5">
                        <Card.Body className="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="text-warning">{event.date}</h3>
                            </div>
                            <div>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>
                                    {event.subtitle}
                                </Card.Text>
                            </div>
                            <div>
                                <img className="event-img" src={event.image}></img>
                            </div>
                        </Card.Body>
                    </Card>)
                }
            </Container>
        </div>
    );
};

export default Events;