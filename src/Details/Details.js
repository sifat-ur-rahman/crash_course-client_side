import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const CourseDetails = useLoaderData()
    console.log(CourseDetails);
    return (
        <div>
            <h3 className='mt-5'>Courses Details: {CourseDetails.name}</h3>

            <div className="card mt-5" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={CourseDetails.img} className="img-fluid h-100  rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">Courses Name: {CourseDetails.name}</h3>
        
        <p className="card-text">Courses price: {CourseDetails.price} Tk</p>
        <p className="card-text">Courses Instructor: {CourseDetails.instructor} </p>
        <p className="card-text">Hours Required: {CourseDetails.time} hours</p>
        <p className="card-text"> {CourseDetails.class} Videos</p>
        <Link to="../../public/keyboard shortcuts.pdf" target="_blank" download>Download</Link>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Details;