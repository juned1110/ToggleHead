import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const UpcomingExaminations = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex items-center justify-between">
        <div className="text-left ml-5">
          <h2 className="text-2xl font-bold text-primary">
            Upcoming Examinations
          </h2>
          <p className="text-gray-600 w-[20vw]">
            Enquire about the examination & register for the exams
          </p>
        </div>
        <div className="border-r h-24 mx-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mr-[20vw] mt-5">
          <div className="text-center mt-5">
            <FaCalendarAlt className="text-3xl text-primary mx-auto mb-2" />
            <h3 className="text-lg font-bold text-primary">
              02th October 2014
            </h3>
            <p className="text-gray-700">Level 1 exam</p>
          </div>

          <div className="text-center mt-5">
            <FaCalendarAlt className="text-3xl text-primary mx-auto mb-2" />
            <h3 className="text-lg font-bold text-primary">Nov-Dec 2016</h3>
            <p className="text-gray-700 text-left ml-8">Level 2</p>
            <p className="text-gray-700">Lorem ipsum</p>
            <p className="text-gray-700">Lorem ipsum</p>
          </div>

          <div className="text-center mt-5">
            <FaCalendarAlt className="text-3xl text-primary mx-auto mb-2" />
            <h3 className="text-lg font-bold text-primary">
              Ongoing this year
            </h3>
            <p className="text-gray-700">Level 3 (Grad)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingExaminations;
