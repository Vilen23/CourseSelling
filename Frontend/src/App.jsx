import React from 'react'
import { Navbar } from './Components/Navbar'
import { Card } from './Components/Card'
import { Signup } from './Components/Signup'
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import { UserSignin } from './Components/Signin';
import { AdminSignin } from './Components/Admin';
import { ShowCourse } from './Components/ShowCourse';
import { AddCourse } from './Components/AddCourse';

function App() {
  return (
    <>
    
    <nav>
      <div className="bg-slate-800 w-vw h-20 flex justify-between items-center">
        <div>
          <span className="text-white text-3xl font-bold ml-16 cursor-pointer">Dukan</span>
        </div>
        <div><ul className="flex text-white w-[350px] justify-between mr-48 cursor-pointer font-semibold text-lg">
              <li>
                <Link to="/">Sign up</Link>
              </li>
              <li>
                <Link to="/Signin">Sign in</Link>
              </li>
              <li>
                <Link to="/Admin">Admin</Link>
              </li>
            </ul></div>
      </div>
      </nav>
    
      <Routes>
        <Route path="/" element={<Card comp={<Signup></Signup>}></Card>}></Route>
        <Route path="/Signin" element={<Card comp={<UserSignin></UserSignin>}></Card>}></Route>
        <Route path="/Admin" element={<Card comp={<AdminSignin></AdminSignin>}></Card>}></Route>
        <Route path='/ShowCourse' element={<ShowCourse></ShowCourse>}></Route>
        <Route path='/AdminAddCourse' element={<Card comp={<AddCourse></AddCourse>}></Card>}></Route>
      </Routes>
   </>
  )
}

export default App