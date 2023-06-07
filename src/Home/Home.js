import React from 'react';
import Carousels from './Components/Carousels';
import Flexibility from './Components/Flexibility';
import LatestCourses from './Components/LatestCourses';
import DiverseRange from './Components/DiverseRange';
import Teacher from './Components/Teacher/Teacher';
import Collaboration from './Components/Collaboration';
import Student from './Components/Student/Student';
import CostEffectiveness from './CostEffectiveness';
import FAQ from './Components/FAQ';
import UpComing from './Components/UpComing/UpComing';
import Experience from './Components/Experience';


const Home = () => {

   

    return (
        <div style={{marginTop: 90, marginBottom:60}} >
            
            <Carousels></Carousels>
            <Flexibility></Flexibility>
            <LatestCourses></LatestCourses>
            <DiverseRange></DiverseRange>
            <Teacher></Teacher>
            <Collaboration></Collaboration>
            <Student></Student>
            <CostEffectiveness></CostEffectiveness>
            <FAQ></FAQ>
            <UpComing></UpComing>
            <Experience></Experience>
        </div>
    );
};

export default Home;