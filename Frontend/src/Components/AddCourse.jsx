import { useState } from "react";
import axios from "axios";

export function AddCourse() {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [imglink,setImglink] = useState("")
    const [price,setPrice] = useState("")
  return (
    <div className="flex flex-col align-middle ">
        <div className="mb-[40px] mt-[-40px] text-center font-bold text-3xl text-slate-800">
            Course Info
        </div>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border-slate-600 bg-slate-200 border-b-2 focus:outline-none text-lg "
        onChange={(e)=>{
            setTitle(e.target.value)
        }}
      /> <br />
      <input
        type="text"
        placeholder="Description"
        className="w-[320px] p-2 border-slate-600 bg-slate-200 border-b-2 focus:outline-none text-lg"
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
      /> <br />
      <input
        type="text"
        placeholder="ImageLink"
        className="w-full p-2 border-slate-600 bg-slate-200 border-b-2 focus:outline-none text-lg"
        onChange={(e)=>{
            setImglink(e.target.value)
        }}
        /> <br />
      <input
        type="text"
        placeholder="Price"
        className="w-full p-2 border-slate-600 bg-slate-200 border-b-2 focus:outline-none text-lg"
        onChange={(e)=>{
            setPrice(e.target.value)
        }}
      /> <br />
      <button className="bg-slate-700 font-semibold text-white  w-42 rounded-3xl py-2 px-3 self-center transform hover:scale-105 focus:scale-100  hover:bg-slate-800"
      onClick={async()=>{
        const response = await axios.post("http://localhost:3000/addcourse",{
            title,
            description,
            imglink,
            price
        })
        if(response.status===200){
            alert("Course added")
            window.location.reload()

        }
      }}>
        Add Course
      </button>
    </div>
  );
}
