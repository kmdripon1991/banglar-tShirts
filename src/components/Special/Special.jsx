import React, { useContext } from 'react';
import { LevelContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const level = useContext(LevelContext)
    return (
        <div className=''>
            <h5>Special</h5>
            <p>{ring}</p>
            <p><small>{level}</small></p>
        </div>
    );
};

export default Special;