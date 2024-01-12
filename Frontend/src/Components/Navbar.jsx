import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserSignin } from './Signin';
import { AdminSignin } from './Admin';

export function Navbar() {
  return (
    <Router>
      <div className="bg-slate-800 w-vw h-20 flex justify-between items-center">
        <div>
          <span className="text-white text-3xl font-bold ml-16 cursor-pointer">Dukan</span>
        </div>
        <div>
          <nav>
            <ul className="flex text-white w-[150px] justify-between mr-48 cursor-pointer font-semibold text-lg">
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Admin">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/Login" element={<UserSignin />} />
        <Route path="/Admin" element={<AdminSignin />} />
      </Routes>
    </Router>
  );
}
