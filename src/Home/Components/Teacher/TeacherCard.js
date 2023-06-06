import React from 'react';

import Card from 'react-bootstrap/Card';


const TeacherCard = ({teacher}) => {
    const {img,name,coursesName}=teacher
    return (
        <Card className='col-sm' >
                 <Card.Img style={{height:'250px'}} variant="top" src={img} />
                <Card.Body>
                     <Card.Title>{name}</Card.Title>
                 <Card.Text>
                     <p>Course Subject: {coursesName} </p>
                 </Card.Text>
                 
                </Card.Body>
                 </Card>
    );
};

export default TeacherCard;