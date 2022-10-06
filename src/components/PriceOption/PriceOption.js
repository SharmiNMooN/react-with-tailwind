import React from "react";
import Feature from "../Feature/Feature";

const PriceOptions = ({ option }) => {
  const { features } = option;

  return (
    <div className="bg-sky-300 m-4 pt-6 rounded-md">
      <div>
        <h3>
          <span className="text-5xl text-white font-semibold">
            {option.price}
          </span>
          <span className="text-2xl text-white font-semibold">/month </span>
        </h3>
        <p className="text-2xl font-semibold my-4">{option.name}</p>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-yellow-500 rounded-md font-bold text-white py-2 mt-4 w-full ">
        {" "}
        Buy Now
      </button>
    </div>
  );
};

export default PriceOptions;
