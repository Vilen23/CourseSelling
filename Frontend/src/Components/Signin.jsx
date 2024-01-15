import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export function UserSignin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-col   align-middle">
      <div className=" mb-[40px] mt-[-40px] text-center font-bold text-3xl text-slate-800">
        SIGN IN
      </div>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border-slate-600 bg-slate-200 border-b-2 focus:outline-none text-lg"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border-slate-600 bg-slate-200 focus:outline-none border-b-2 text-lg"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br />
      <button
        className="bg-slate-700 font-semibold text-white  w-24 rounded-3xl py-2 self-center transform hover:scale-105 focus:scale-100  hover:bg-slate-800"
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:3000/signinuser",
            {
              username: username,
              password: password,
            }
          );

          if (response.status === 200) {
            setIsLoggedIn(true);
          } else {
            // Handle unsuccessful login
            console.log("Login failed:", response.data.msg);
          }
        }}
      >
        {isLoggedIn?<Link to="/ShowCourse">Login</Link> : "Login"}
      </button>
    </div>
  );
}
