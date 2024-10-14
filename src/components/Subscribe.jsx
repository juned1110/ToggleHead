import React from "react";
import img from "../assets/image2.png";
import { FaCaretRight } from "react-icons/fa6";

const Subscribe = () => (
  <div className="flex">
    <div className="bg-white text-primary p-8 text-center relative w-1/2 h-[50vh]">
      <h2 className="text-2xl font-bold mb-4 absolute left-14">Subscribe</h2>
      <p className="absolute mt-10 text-left ml-6 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, labore?
        Repudiandae praesentium eaque accusamus debitis aliquam similique quos
        perspiciatis itaque.
      </p>
      <div className="absolute bottom-10 left-14">
        <input
          type="email"
          placeholder="Enter your Email Address"
          className="p-2 rounded-lg mr-2 border border-gray-300 mb-20 w-[30vw] "
        />
        <button className="bg-secondary text-white bg-primary rounded-xl font-semibold px-7 py-2">
          Subscribe Now
          <p className="absolute right-0 mr-2 -mt-5 text-xl">
            <FaCaretRight />
          </p>
        </button>
      </div>
    </div>

    <div className="w-1/2">
      <img
        src={img}
        alt="Subscribe Image"
        className="h-[50vh] w-full object-cover"
      />
    </div>
  </div>
);

export default Subscribe;
