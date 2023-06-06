import React from 'react';
import Carousels from './Components/Carousels';
import Flexibility from './Components/Flexibility';
import LatestCourses from './Components/LatestCourses';
import DiverseRange from './Components/DiverseRange';


const Home = () => {

   

    return (
        <div >
            
            <Carousels></Carousels>
            <Flexibility></Flexibility>
            <LatestCourses></LatestCourses>
            <DiverseRange></DiverseRange>
        </div>
    );
};

export default Home;