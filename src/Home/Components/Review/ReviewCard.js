import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

const ReviewCard = ({review}) => {
    const {name,coursesName,studentReview}=review
    return (
        <Card className='col-sm' >
                 
                <Card.Body className='text-start'>
                    <div className='text-warning'>
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/>
                    </div>
                     <Card.Title>{name}</Card.Title>
                 <Card.Text>
                     <p>Course Subject: <span className='fw-bolder'> {coursesName} </span> </p>
                     <p>{studentReview}</p>
                 </Card.Text>
                 
                </Card.Body>
                 </Card>
    );
};

export default ReviewCard;