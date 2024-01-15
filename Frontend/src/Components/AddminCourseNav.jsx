import React from "react";
import { Link } from "react-router-dom";

export function AdminCourseNav() {
  return (
    <div className="bg-slate-800 w-vw h-20 flex justify-between items-center">
      <div>
        <span className="text-white text-3xl font-bold ml-16 cursor-pointer">
          Dukan
        </span>
      </div>
      <div>
        <ul className="flex text-white w-[200px] justify-between mr-[150px] cursor-pointer font-semibold text-lg">
          <li>
            <Link to="/AdminAddCourse">Add Course</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
