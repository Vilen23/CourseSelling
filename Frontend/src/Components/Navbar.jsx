import { BrowserRouter as Link } from 'react-router-dom';
import { UserSignin } from './Signin';
import { AdminSignin } from './Admin';
import { Signup } from "./Signup";

export function Navbar() {
  return (
    
    <nav>
      <div className="bg-slate-800 w-vw h-20 flex justify-between items-center">
        <div>
          <span className="text-white text-3xl font-bold ml-16 cursor-pointer">Dukan</span>
        </div>
        <div><ul className="flex text-white w-[150px] justify-between mr-48 cursor-pointer font-semibold text-lg">
              <li>
                <Link to="/">Signup</Link>
              </li>
              <li>
                <Link to="/Signin">Signin</Link>
              </li>
              <li>
                <Link to="/Admin">Admin</Link>
              </li>
            </ul></div>
      </div>
      </nav>
  );
}
