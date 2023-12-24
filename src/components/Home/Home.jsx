import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';

const Home = () => {

    const tShirts = useLoaderData()

    return (
        <div>
            <h1>TShirts total: {tShirts.length}</h1>
            <div className='tShirt-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                    ></TShirt>)
                }
            </div>
        </div>
    );
};

export default Home;