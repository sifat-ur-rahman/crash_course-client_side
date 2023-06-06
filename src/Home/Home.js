import React from 'react';
import Carousels from './Components/Carousels';
import Flexibility from './Components/Flexibility';
import LatestCourses from './Components/LatestCourses';
import DiverseRange from './Components/DiverseRange';
import Teacher from './Components/Teacher/Teacher';


const Home = () => {

   

    return (
        <div >
            
            <Carousels></Carousels>
            <Flexibility></Flexibility>
            <LatestCourses></LatestCourses>
            <DiverseRange></DiverseRange>
            <Teacher></Teacher>
        </div>
    );
};

export default Home;