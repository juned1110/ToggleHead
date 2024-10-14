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
  <div className="p-8 w-[90vw] ml-10 bg-[#F6F6F6] grid grid-cols-1 md:grid-cols-4 text-center ">
    {stats.map((stat, index) => (
      <div key={index} className="bg-[#F6F6F6] p-4 rounded w-[20vw]">
        <p className="mt-2 -ml-16 text-primary">{stat.description}</p>
        <h2 className="text-5xl font-bold -ml-16 text-primary">{stat.label}</h2>
        <p className="mt-2 font-medium -ml-16 text-primary">
          {stat.description}
        </p>
        <p className="mt-2 ml-10 text-xs font-medium text-left text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic
          culpa dolore, eum tenetur temporibus eaque esse pariatur dolor rerum.
        </p>
      </div>
    ))}
  </div>
);

export default Statistics;
