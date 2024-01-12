export function AdminSignin(){
    return <div className="flex flex-col   align-middle">
        <input type="text" placeholder="Username"
        className="w-full p-2 border-slate-600 bg-slate-200 border-b-2 focus:outline-none text-lg"/> <br />
        <input type="password" placeholder="Password"
        className="w-full p-2 border-slate-600 bg-slate-200 focus:outline-none border-b-2 text-lg"/> <br />
        <button className="bg-slate-700 font-semibold text-white  w-24 rounded-3xl py-2 self-center transform hover:scale-105 focus:scale-100  hover:bg-slate-800">Login</button>
    </div>
}   