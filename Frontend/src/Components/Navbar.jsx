import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar(){
  const location = useLocation();

  return (
    <div className="bg-slate-800 w-vw h-20 flex justify-between items-center">
      <div>
        <span className="text-white text-3xl font-bold ml-16 cursor-pointer">
          Dukan
        </span>
      </div>
      <div>
        <ul className="flex text-white w-[350px] justify-between mr-48 cursor-pointer font-semibold text-lg">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Sign up
            </Link>
          </li>
          <li>
            <Link
              to="/Signin"
              className={location.pathname === '/Signin' ? 'active' : ''}
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/Admin"
              className={location.pathname === '/Admin' ? 'active' : ''}
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

