import React, { useContext } from 'react';
import CousinM from '../CousinM/CousinM';
import CousinF from '../Aunty/Aunty';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    // console.log(money)
    return (
        <div>
            <h3>Uncle</h3>
            <h5>GrandPa Money: {money}</h5>
            <button onClick={()=>setMoney(money + 1000)}>Send 1000tk</button>
            <section className='flex'>
                <CousinM hasFriend={true}>nabil</CousinM>
                <CousinM>nabila</CousinM>
            </section>
        </div>
    );
};

export default Uncle;