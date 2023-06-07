import React from 'react';

import UpComingCard from './UpComingCard';

const UpComing = () => {
    const upComingCourses =[
        {
            id:1,
            name: "Digital Marketing",
            img: "https://i.ibb.co/yyy8w8p/digitalmarketingagency1.jpg",
            price: 1150,
            instructor: "Rumana",
            time: 10,
            class: 11
        },
        {
            id:2,
            name: "Web Development",
            img: "https://i.ibb.co/LhTfCPz/course-1663052056.jpg",
            price: 1150,
             instructor: "Shakil",
             time: 10,
            class: 11
        },
        {
            id:3,
            name: "Photography",
            img: "https://i.ibb.co/WVNh3DC/sun-photo.jpg",
            price: 1150,
            instructor: "Shakil",
            time: 10,
            class: 11
        },
    ]
    return (
        <div>
            <h3>Our UpComing Courses</h3>
        <div  className='cards row mt-3'>
            
            {
                upComingCourses.map(courses=> <UpComingCard
                key={courses.id}
                courses={courses}
                ></UpComingCard>)
            }
        </div>
        </div>
    );
};

export default UpComing;