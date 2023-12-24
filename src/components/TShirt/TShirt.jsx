import React from 'react';

const TShirt = ({tShirt}) => {

    const {name, picture, price, gender}=tShirt
    console.log(tShirt)
    return (
        <div>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <p>Gender: {gender}</p>
        </div>
    );
};

export default TShirt;