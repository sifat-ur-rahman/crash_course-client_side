import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const allReview =[
        {
            id:1,
            name:"Fahim",
            coursesName: "Mathematics",
            studentReview:'I recently embarked on a journey of this courses, and the experience has been nothing short of transformative. The flexibility, accessibility, and quality of education surpassed my expectations, providing me with a wealth of knowledge and invaluable skills.'
        },
        {
            id:2,
            name:"Rukhsana",
            coursesName: "Calculus",
            studentReview:'I recently embarked on a journey of this courses, and the experience has been nothing short of transformative. The flexibility, accessibility, and quality of education surpassed my expectations, providing me with a wealth of knowledge and invaluable skills.'
        },
        {
            id:3,
            name:"Shakil",
            coursesName: "Physics",
            studentReview:'I recently embarked on a journey of this courses, and the experience has been nothing short of transformative. The flexibility, accessibility, and quality of education surpassed my expectations, providing me with a wealth of knowledge and invaluable skills.'
        },
    ]
    return (
        <div>
            <h2>Student Review </h2>
            <div className='cards row'>
            {
                allReview?.map(review=> <ReviewCard
                key={review.id}
                review={review}
                ></ReviewCard>)
            }
            </div>
        </div>
    );
};

export default Review;