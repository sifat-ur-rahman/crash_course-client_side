import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const CourseDetails = useLoaderData()
    console.log(CourseDetails);
    return (
        <div>
            <h3>Details</h3>
        </div>
    );
};

export default Details;