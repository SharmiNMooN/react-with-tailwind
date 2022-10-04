import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const PriceOptions = ({ option }) => {
  return (
    <div className="bg-sky-300 m-4 pt-6 rounded-md">
      <div>
        <h3>
          <span className="text-5xl text-white font-semibold">
            {option.price}
          </span>
          <span className="text-2xl text-white font-semibold">/month </span>
        </h3>
        <p>
          <span className="text-2xl font-semibold my-4">{option.name}</span>
        </p>
        <div className="flex items-center">
          <CheckCircleIcon class="h-4 w-4 text-blue-500" />
          <p className="m1-2">Awesome Feature</p>
        </div>
      </div>
    </div>
  );
};

export default PriceOptions;
