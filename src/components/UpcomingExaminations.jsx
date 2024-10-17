// import React from "react";
// import { FaCalendarAlt } from "react-icons/fa";

// const UpcomingExaminations = () => {
//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4">
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
//         <div className="text-left mt-8 md:mt-12">
//           <h2 className="text-2xl font-bold text-primary font-sans">
//             Upcoming
//           </h2>
//           <h2 className="text-2xl font-bold text-primary">Examinations</h2>
//           <p className="text-gray-600 mt-2 md:mt-0">
//             Enquire about the examination &
//             <br />
//             register for the exams
//           </p>
//         </div>

//         {/* Vertical line divider for desktop and hidden on mobile */}
//         <br />
//         <br />
//         <div className="hidden md:block md:bg-red-900">
//           <hr className="bg-gray-300 h-[25vh] w-0.5" />
//         </div>

//         <div className="grid grid-cols-1 gap-6 mt-8 md:mt-0 md:grid-cols-3 md:h-[25vh] md:w-[65vw] md:bg-red-900 md:">
//           <div className="flex items-start md:items-center">
//             <FaCalendarAlt className="text-3xl text-primary mr-4" />
//             <div>
//               <h3 className="text-lg font-bold text-primary">
//                 02th October 2014
//               </h3>
//               <p className="text-gray-700">Level 1 exam</p>
//             </div>
//           </div>

//           <div className="flex items-start md:items-center">
//             <FaCalendarAlt className="text-3xl text-primary mr-4" />
//             <div className="md:h-[30vh]">
//               <h3 className="text-lg font-bold text-primary md:mt-[11vh]">
//                 Nov-Dec 2016
//               </h3>
//               <p className="text-gray-700">Level 2</p>
//               <p className="text-gray-700">Lorem Ipsum</p>
//               <p className="text-gray-700">Lorem Ipsum</p>
//             </div>
//           </div>

//           <div className="flex items-start md:items-center">
//             <FaCalendarAlt className="text-3xl text-primary mr-4" />
//             <div>
//               <h3 className="text-lg font-bold text-primary">
//                 Ongoing this year
//               </h3>
//               <p className="text-gray-700">Level 3 (Grad)</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingExaminations;

import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const UpcomingExaminations = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Header Section */}
        <div className="text-left mt-8 md:mt-12">
          <h2 className="text-2xl font-bold text-primary font-sans">
            Upcoming
          </h2>
          <h2 className="text-2xl font-bold text-primary">Examinations</h2>
          <p className="text-gray-600 mt-2">
            Enquire about the examination &
            <br />
            register for the exams
          </p>
        </div>

        {/* Vertical line divider, hidden on mobile */}
        <div className="hidden md:block mx-8">
          <hr className="bg-gray-300 h-[25vh] w-0.5" />
        </div>

        {/* Examination Items */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:mt-0 md:grid-cols-3 md:h-[25vh] md:w-[65vw]">
          <div className="flex items-start md:items-center">
            <FaCalendarAlt className="text-3xl text-primary mr-4" />
            <div>
              <h3 className="text-lg font-bold text-primary">
                02th October 2014
              </h3>
              <p className="text-gray-700">Level 1 exam</p>
            </div>
          </div>

          <div className="flex items-start md:items-center">
            <FaCalendarAlt className="text-3xl text-primary mr-4" />
            <div className="md:h-[30vh]">
              <h3 className="text-lg font-bold text-primary md:mt-[8vh]">
                Nov-Dec 2016
              </h3>
              <p className="text-gray-700">Level 2</p>
              <p className="text-gray-700">Lorem Ipsum</p>
              <p className="text-gray-700">Lorem Ipsum</p>
            </div>
          </div>

          <div className="flex items-start md:items-center">
            <FaCalendarAlt className="text-3xl text-primary mr-4" />
            <div>
              <h3 className="text-lg font-bold text-primary">
                Ongoing this year
              </h3>
              <p className="text-gray-700">Level 3 (Grad)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingExaminations;
