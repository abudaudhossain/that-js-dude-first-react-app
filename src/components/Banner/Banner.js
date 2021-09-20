import React from 'react';
import Button from '../Button/Button';


const Banner = () => {
    return (
        <div className="banner">
            <h1>Exclusive React Workshop for beginners!</h1>
            <p>Once in a year opportunity to learn and build your first React app</p>
            <Button title="Learn more"></Button>

        </div>
    );
};

export default Banner;