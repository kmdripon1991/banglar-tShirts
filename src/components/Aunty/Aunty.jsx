import React from "react";
import CousinM from "../CousinM/CousinM";

const Aunty = ({ring}) => {
  return (
    <div className="">
      <h2>Aunty</h2>
      <section className="flex">
        <CousinM>Abir</CousinM>
        <CousinM hasFriend={true} ring = {ring}>Nibir</CousinM>
      </section>
    </div>
  );
};

export default Aunty;
