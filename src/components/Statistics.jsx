import React from "react";

const stats = [
  {
    label: "123+",
    description: "Lorem Ipsum",
  },
  {
    label: "12+",
    description: "Lorem Ipsum",
  },
  {
    label: "12+",
    description: "Lorem Ipsum",
  },
  {
    label: "50+",
    description: "Lorem Ipsum",
  },
];

const Statistics = () => (
  <div className="p-4 md:p-8 w-full md:w-[90vw] mx-auto bg-[#F6F6F6] grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
    {stats.map((stat, index) => (
      <div key={index} className="bg-[#F6F6F6] p-4 rounded w-full md:w-[20vw]">
        <p className="text-sm md:text-base text-primary">{stat.description}</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          {stat.label}
        </h2>
        <p className="text-xs md:text-base text-primary mt-2">
          {stat.description}
        </p>
        <p className="text-xs text-primary mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic
          culpa dolore, eum tenetur temporibus eaque esse pariatur dolor rerum.
        </p>
      </div>
    ))}
  </div>
);

export default Statistics;
