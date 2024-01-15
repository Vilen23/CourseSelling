import React from "react";
import { Link } from "react-router-dom";

export function UserNavbar() {
  return (
    <div className="bg-slate-800 w-vw h-20 flex justify-between items-center">
      <div>
        <span className="text-white text-3xl font-bold ml-16 cursor-pointer">
          <Link to="/">Dukan</Link>
        </span>
      </div>
      <div>
        <ul className="flex text-white w-[200px] justify-between mr-[50px] cursor-pointer font-semibold text-lg">
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
