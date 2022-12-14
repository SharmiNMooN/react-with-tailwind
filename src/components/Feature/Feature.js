import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon class="h-4 w-4 text-blue-500" />
      <p className="m1-2">{feature}</p>
    </div>
  );
};

export default Feature;
