import React from 'react';
import Navbar from '../components/Navbar';

const Facts: React.FC = () => {
    return (
        <div>
            <Navbar /> {/* Add Navbar */}
            <h1>Facts</h1>
            <p>This is the Facts page.</p>
        </div>
    );
};

export default Facts;