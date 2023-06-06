import React from 'react';
import CoursesCard from '../../CoursesCard/CoursesCard';

const LatestCourses = () => {
const allCourses = [
{
    id: 1,
        name: "Mathematics",
        img: "https://www.21clhk.org/wp-content/uploads/2020/12/Creativity-in-Mathematics.png",
        price: 1150,
        instructor: "Fahim",
        time: 10,
        class: 11
},
{
    id: 2,
    name: "Calculus",
    img: "https://qph.cf2.quoracdn.net/main-qimg-16a98cddb17faaaf0378e714cb479ef9-lq",
    price: 1150,
    instructor: "Gias Uddin",
    time: 10,
    class: 12
},
{
    id: 3,
    name: "Physics",
    img: "https://qph.cf2.quoracdn.net/main-qimg-11029f44a9f162615f366bf6887cdc97.webp",
    price: 1150,
    instructor: "Shakil",
    time: 10,
    class: 11
},
]
    return (
        <div>
            <h2>Our Latest Courses </h2>
            <div className='cards row'>
            {
                allCourses?.map(courses=> <CoursesCard
                key={courses.id}
                courses={courses}
                ></CoursesCard>)
            }
        </div>
        </div>
    );
};

export default LatestCourses;