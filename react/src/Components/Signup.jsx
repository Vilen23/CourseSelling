import { useState } from "react"
import axios from 'axios'

export function Signup(){
    const[email,setEmail] = useState("")
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")


    return <div className="flex flex-col   align-middle">
        <input type="email" placeholder="Email"
        className=" p-2 w-[330px] border-slate-600 bg-slate-200 border-b-2 focus:outline-none text-lg "
        onChange={(e)=>{
            setEmail(e.target.value)
        }}/> <br />
        <input type="text" placeholder="Username"
        className="w-full p-2 border-slate-600 bg-slate-200 border-b-2 focus:outline-none text-lg"
        onChange={(e)=>{
            setUsername(e.target.value)
        }}/> <br />
        <input type="password" placeholder="Password"
        className="w-full p-2 border-slate-600 bg-slate-200 focus:outline-none border-b-2 text-lg"
        onChange={(e)=>{
            setPassword(e.target.value)
        }}/> <br />
        <button 
        className="bg-slate-700 font-semibold text-white  w-24 rounded-3xl 
        py-2 self-center transform hover:scale-105 focus:scale-100  hover:bg-slate-800"
        onClick={()=>{
            axios.post("http://localhost:3000/user",{
                email,
                username,
                password
            })
                .then((response)=>{
                    alert("user added")
                })
                
        }}>Submit</button>
    </div>
}