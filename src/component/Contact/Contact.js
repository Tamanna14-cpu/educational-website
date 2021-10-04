import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <h2 style={{ color: 'orange' }} className="mb-5">Get Touch In!</h2>
            <div className="d-flex justify-content-around">
                <div>
                    <form>
                        <textarea className="my-3" rows="5" cols="70" placeholder="Enter Your Opinion Here">
                        </textarea>
                        <div className="d-flex gap-4">
                            <div >
                                <input className="p-2" type="email" placeholder="Enter email" />
                            </div>
                            <div >
                                <input className="p-2" type="password" placeholder="Enter password" />
                            </div>
                        </div>
                        <div class="my-4">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-outline-dark">Submit</button>
                    </form>
                </div>

                <div>
                    <div className="d-flex gap-4 mb-4">
                        <div><i className="fas fa-home fa-3x"></i></div>
                        <div>
                            <h5>Buttonwood, California.</h5>
                            <p>Rosemead, CA 91770</p>
                        </div>
                    </div>
                    <div className="d-flex gap-4 mb-4">
                        <div><i class="fas fa-mobile-alt fa-3x"></i></div>
                        <div>
                            <h5>+1 253 565 2365</h5>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div className="d-flex gap-4">
                        <div><i class="fas fa-envelope-open fa-3x"></i></div>
                        <div>
                            <h5>support@colorlib.com</h5>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Contact;