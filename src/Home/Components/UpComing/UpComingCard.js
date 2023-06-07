import React from 'react';
import Card from 'react-bootstrap/Card';

const UpComingCard = ({courses}) => {
    const {img,name,time,instructor}=courses
    return (
        <Card className='col-sm' >
                 <Card.Img style={{height:'250px'}} variant="top" src={img} />
                <Card.Body>
                     <Card.Title>{name}</Card.Title>
                 <Card.Text>
                     <p>Course Duration: {time} hours</p>
                     <p className="card-text">Courses Instructor: {instructor} </p>
                 </Card.Text>
                 
                </Card.Body>
                 </Card>
    );
};

export default UpComingCard;