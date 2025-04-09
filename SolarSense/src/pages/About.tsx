import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
    return (
        <div>
            <Navbar /> {/* Add Navbar */}
            <h1>About</h1>
            <p>This is the About page.</p>
        </div>
    );
};

export default About;