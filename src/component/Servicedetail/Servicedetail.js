import React from 'react';
import { useParams } from 'react-router';

const Servicedetail = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h4>You have Enrolled in Course No: {serviceId}</h4>
        </div>
    );
};

export default Servicedetail;