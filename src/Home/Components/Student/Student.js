import React from 'react';
import StudentCard from './StudentCard';



const Student = () => {
    const allStudent =[
        {
            id:1,
            name:"Ayesha",
            coursesName: "Mathematics",
            img: "https://i.ibb.co/Syf3GnY/asian-man.jpg",
            story: "Online courses transformed Emma's dreams into reality, providing flexibility, support, and global networking for her success."
        },
        {
            id:2,
            name:"Rokeya",
            coursesName: "Calculus",
            img: "https://i.ibb.co/CBpgt6P/transparent-women.jpg",
            story: "Online courses transformed Emma's dreams into reality, providing flexibility, support, and global networking for her success."
        },
        {
            id:3,
            name:"Yasmin",
            coursesName: "Physics",
            img: "https://i.ibb.co/3015dKL/depositphotos-2.jpg",
            story: "Online courses transformed Emma's dreams into reality, providing flexibility, support, and global networking for her success."
        },
    ]
    return (
        <div>
            <h2>Our Instructors </h2>
            <div className='cards row'>
            {
                allStudent?.map(student=> <StudentCard
                key={student.id}
                student={student}
                ></StudentCard>)
            }
            </div>
        </div>
    );
};

export default Student;