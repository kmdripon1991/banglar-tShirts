import React from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    return (
        <div>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
            </section>
        </div>
    );
};

export default Grandpa;