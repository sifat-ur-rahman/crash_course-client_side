import React from 'react';
import TeacherCard from './TeacherCard';

const Teacher = () => {
    const allTeacher =[
        {
            id:1,
            name:"Fahim",
            coursesName: "Mathematics",
            img: "https://i.ibb.co/t4sxxJk/student-1.png"
        },
        {
            id:2,
            name:"Rukhsana",
            coursesName: "Calculus",
            img: "https://i.ibb.co/rsHq2Jc/student-2.png"
        },
        {
            id:3,
            name:"Shakil",
            coursesName: "Physics",
            img: "https://i.ibb.co/Vx4tWzy/student-3.png"
        },
    ]
    return (
        <div>
            <h2>Our Instructors </h2>
            <div className='cards row'>
            {
                allTeacher?.map(teacher=> <TeacherCard
                key={teacher.id}
                teacher={teacher}
                ></TeacherCard>)
            }
            </div>
        </div>
    );
};

export default Teacher;