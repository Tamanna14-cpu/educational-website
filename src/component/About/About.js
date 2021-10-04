import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import image1 from '../../images/icon1.svg';
import image2 from '../../images/icon2.svg';
import image3 from '../../images/icon3.svg';


const About = () => {
    return (
        <div>
            <Container>
                <div className="grid-layout gap-5 my-5">
                    <div className="card small-img shadow-lg p-3 mb-2 bg-white">
                        <img src={image1} className="about-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">60+ UX courses</h5>
                            <p className="card-text">The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div className="card small-img shadow-lg p-3 mb-2 bg-white">
                        <img src={image2} className="about-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Expert instructors</h5>
                            <p className="card-text">The automated process all your website tasks.</p>
                        </div>
                    </div>
                    <div className="card small-img shadow-lg p-3 mb-2 bg-white">
                        <img src={image3} className="about-img" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Life time access</h5>
                            <p className="card-text">The automated process all your website tasks.</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center my-5 pt-5 gap-5">
                    <div>
                        <h2>Learn new skills online with top educators</h2>
                        <br />
                        <p className="about-para">The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>

                        <div className="about-grid gap-3 mt-5">
                            <div><i class="fas fa-check"></i></div>
                            <div>Techniques to engage effectively with vulnerable children and young people.</div>
                        </div>
                        <div className="about-grid gap-3 mt-3">
                            <div><i class="fas fa-check"></i></div>
                            <div>Join millions of people from around the world learning together.</div>
                        </div>
                        <div className="about-grid gap-3 mt-3">
                            <div><i class="fas fa-check"></i></div>
                            <div>Join millions of people from around the world learning together. Online learning is as easy and natural.</div>
                        </div>
                    </div>

                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Cxf5sOXG0w0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;