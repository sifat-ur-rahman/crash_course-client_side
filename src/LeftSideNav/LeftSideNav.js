import React, { useEffect, useState } from 'react';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])


    useEffect(()=>{
        fetch('https://server-three-phi.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h4> All Courses: {categories.length} </h4>
        </div>
    );
};

export default LeftSideNav;