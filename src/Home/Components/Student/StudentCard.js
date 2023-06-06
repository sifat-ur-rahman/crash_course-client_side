import React from 'react';
import Card from 'react-bootstrap/Card';

const StudentCard = ({student}) => {
    const {img,name,coursesName,story}= student
    return (
        <Card className='col-sm' >
                 <Card.Img style={{height:'250px'}} variant="top" src={img} />
                <Card.Body>
                     <Card.Title>{name}</Card.Title>
                 <Card.Text>
                     <p>Course Subject: {coursesName} </p>
                     <p>{story}</p>
                 </Card.Text>
                 
                </Card.Body>
                 </Card>
    );
};

export default StudentCard;