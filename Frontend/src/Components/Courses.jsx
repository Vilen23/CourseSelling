import { useEffect, useState } from "react"

export function AdminCourses(){
    const [courses,setCourse] = useState([])

    useEffect(()=>{
        const fetchdata = async ()=>{
            const response = await fetch("http://localhost:3000/courses")
            const res = await response.json()
            setCourse(res.courses)
            console.log("reaching async")
        }
        fetchdata();
    },[])

    return (
        <div className="flex flex-wrap">
            
            {courses.map((course)=>{
                return <div className='flex flex-wrap mt-10 ml-10  '>
                    <div className='bg-slate-200 p-4 shadow-2xl flex flex-col rounded-2xl ' >
                    <img src={course.imglink} alt="" className='h-40 w-[284.44px] rounded-2xl ' />
                    <p className='text-center font-bold text-[30px] w-[284.44px] leading-8 mt-4 ' >{course.title}</p>
                    <p className="text-center font-medium my-2 ">{course.price}</p>
                    <button className="bg-slate-700 font-semibold text-white  w-24 rounded-3xl 
        py-2 self-center transform hover:scale-105 focus:scale-100  hover:bg-slate-800">Edit</button>
                    </div>
                </div>
            })}
        </div>
    )
}