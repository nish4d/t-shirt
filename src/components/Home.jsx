import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirt = useLoaderData();
    console.log(shirt);
    return (
        <div>
            <h2>This is home {shirt.length}</h2>
        </div>
    );
};

export default Home;