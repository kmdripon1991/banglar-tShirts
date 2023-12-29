import React, { useContext, useState } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Friend = ({ring}) => {
    
    // console.log(price)
    const [price, setPrice] = useContext(MoneyContext)
    console.log(price, typeof price)
    const newPrice = price + 100
    console.log(newPrice)
    const [total, setTotal] = useState(0)
    // setTotal(newPrice)
    console.log(total, typeof total)
    return (
        <div>
            <h5>Friend</h5>
            <p><small>Ring: {ring}</small></p>
            <h6>Price: {newPrice}</h6>
        </div>
    );
};

export default Friend;