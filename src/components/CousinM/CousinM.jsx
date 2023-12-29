import React from 'react';
import Friend from '../Friend/Friend';

const CousinM = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h4>CousinM</h4>
            <p>{children}</p>
            {hasFriend && <Friend ring = {ring}></Friend>}
        </div>
    );
};

export default CousinM;