import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, handleAddToCart}) => {

    const {name, picture, price, gender, _id}=tShirt
    // console.log(tShirt)
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <p>Gender: {gender}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;