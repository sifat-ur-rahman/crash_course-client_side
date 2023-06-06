import React from 'react';
import Carousels from './Components/Carousels';
import Flexibility from './Components/Flexibility';
import LatestCourses from './Components/LatestCourses';


const Home = () => {

   

    return (
        <div >
            
            <Carousels></Carousels>
            <Flexibility></Flexibility>
            <LatestCourses></LatestCourses>
        </div>
    );
};

export default Home;