import React from 'react';
import './CoursesCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CoursesCard = ({courses}) => {
    const {img,name,time,id}=courses
    // console.log(courses);
    return (
       
           
                
                 <Card style={{ width: '18rem' }} >
                 <Card.Img style={{height:'250px'}} variant="top" src={img} />
                <Card.Body>
                     <Card.Title>{name}</Card.Title>
                 <Card.Text>
                     <p>Course Duration: {time} hours</p>
                 </Card.Text>
                 <Button variant="btn btn-outline-primary" 
                 ><Link to={`/details/${id}`}>Details</Link>
                    </Button>
                </Card.Body>
                 </Card>
               
            
       
    );
};

export default CoursesCard;