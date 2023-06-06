import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../CoursesCard/CoursesCard';

const Courses = () => {
    const allCourses = useLoaderData()
    return (
        <div style={{marginTop: 90}} className='cards '>
            
            {
                allCourses.map(courses=> <CoursesCard
                key={courses.id}
                courses={courses}
                ></CoursesCard>)
            }
        </div>
    );
};

export default Courses;