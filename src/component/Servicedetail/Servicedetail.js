import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Servicedetail = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h2 className="text-warning fw-bold mt-5">Congratulation!!</h2>
            <h4>You have Enrolled in Course No: {serviceId}</h4>
        </div>
    );
};

export default Servicedetail;