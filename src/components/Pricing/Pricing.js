import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      featuers: [
        "Awesome features",
        "Wing feathers",
        "Tail feathers",
        "Contour feathers",
        "Down featuers",
        "Filoplume featuers",
        "Bristle featuers",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,

      featuers: [
        "Awesome features",
        "Wing feathers",
        "Tail feathers",
        "Contour feathers",
        "Down featuers",
        "Filoplume featuers",
        "Bristle featuers",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      featuers: [
        "Awesome features",
        "Wing feathers",
        "Tail feathers",
        "Contour feathers",
        "Down featuers",
        "Filoplume featuers",
        "Bristle featuers",
      ],
    },
    {
      id: 4,
      name: "Ultra Premium",
      price: 39.99,
      featuers: [
        "Awesome features",
        "Wing feathers",
        "Tail feathers",
        "Contour feathers",
        "Down featuers",
        "Filoplume featuers",
        "Bristle featuers",
      ],
    },
    {
      id: 5,
      name: "Ultra Gold",
      price: 59.99,
      featuers: [
        "Awesome features",
        "Wing feathers",
        "Tail feathers",
        "Contour feathers",
        "Down featuers",
        "Filoplume featuers",
        "Bristle featuers",
      ],
    },
  ];
  return (
    <div>
      <h2 className=" text-5xl font-bold bg-pink-300 text-white">
        Best Deal Of the Town
      </h2>
      <div className="grid grid-cols-5 gap-2 ">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
