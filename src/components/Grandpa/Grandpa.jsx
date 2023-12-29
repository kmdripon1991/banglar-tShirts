import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const LevelContext = createContext("Hira");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Has Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <LevelContext.Provider value="cow">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </LevelContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
