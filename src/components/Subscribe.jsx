import React from "react";
import img from "../assets/image2.png";
import { FaCaretRight } from "react-icons/fa6";

const Subscribe = () => (
  <div className="flex flex-col md:flex-row">
    <div className="bg-white text-primary p-6 md:p-8 text-center relative md:w-1/2 h-[50vh]">
      <h2 className="text-2xl font-bold mb-4 absolute left-6 md:left-14">
        Subscribe
      </h2>
      <p className="absolute mt-10 text-left left-4 md:left-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, labore?
        Repudiandae praesentium eaque accusamus debitis aliquam similique quos
        perspiciatis itaque.
      </p>
      <div className="absolute bottom-10 left-4 md:left-14">
        <input
          type="email"
          placeholder="Enter your Email Address"
          className="p-2 rounded-lg mr-2 border border-gray-300 mb-20 w-[60vw] md:w-[30vw]"
        />
        <button className="bg-primary text-white rounded-xl font-semibold px-7 py-2">
          Subscribe Now
          <p className="absolute right-0 mr-2 -mt-5 text-xl">
            <FaCaretRight />
          </p>
        </button>
      </div>
    </div>

    <div className="w-full md:w-1/2">
      <img
        src={img}
        alt="Subscribe Image"
        className="h-[50vh] w-full object-cover"
      />
    </div>
  </div>
);

export default Subscribe;
