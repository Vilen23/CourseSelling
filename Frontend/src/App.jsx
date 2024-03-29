import React from "react";
import { Navbar } from "./Components/Navbar";
import { Card } from "./Components/Card";
import { Signup } from "./Components/Signup";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import { UserSignin } from "./Components/Signin";
import { AdminSignin } from "./Components/Admin";
import { ShowCourse } from "./Components/ShowCourse";
import { AddCourse } from "./Components/AddCourse";
import { AdminNavbar } from "./Components/AdminNavBar";
import { AdminCourses } from "./Components/Courses";
import { AdminCourseNav } from "./Components/AddminCourseNav";
import { UserNavbar } from "./Components/UserNavbar";

function App() {
  const location = useLocation();
  return (
    <>
      {/* Conditionally render Navbar only if not on /AdminAddCourse route */}
      {location.pathname !== "/AdminAddCourse" &&
        location.pathname !== "/AdminCourses" && location.pathname !== '/ShowCourse' && <Navbar />}
        {location.pathname === '/AdminAddCourse' && <AdminNavbar/>}
        {location.pathname === '/AdminCourses' && <AdminCourseNav/>}
        {location.pathname === '/ShowCourse' && <UserNavbar></UserNavbar>}

      <Routes>
        <Route path="/" element={<Card comp={<Signup />} />}></Route>
        <Route path="/Signin" element={<Card comp={<UserSignin />} />}></Route>
        <Route path="/Admin" element={<Card comp={<AdminSignin />} />}></Route>
        <Route path="/ShowCourse" element={<ShowCourse></ShowCourse>} />
        <Route path="/AdminAddCourse" element={<Card comp={<AddCourse></AddCourse>}></Card>}></Route>
        <Route path="/AdminCourses" element={<AdminCourses></AdminCourses>} ></Route>
        
      </Routes>
    </>
  );
}

export default App;
