import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const UpcomingExaminations = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-primary">
            Upcoming Examinations
          </h2>
          <p className="text-gray-600 mt-2 md:mt-0">
            Enquire about the examination & register for the exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
          <div className="text-center">
            <FaCalendarAlt className="text-3xl text-primary mx-auto mb-2" />
            <h3 className="text-lg font-bold text-primary">
              02th October 2014
            </h3>
            <p className="text-gray-700">Level 1 exam</p>
          </div>

          <div className="text-center">
            <FaCalendarAlt className="text-3xl text-primary mx-auto mb-2" />
            <h3 className="text-lg font-bold text-primary">Nov-Dec 2016</h3>
            <p className="text-gray-700">Level 2</p>
          </div>

          <div className="text-center">
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
