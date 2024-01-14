import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function NavbarLayout(){
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}