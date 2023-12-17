import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const link = <>
        <li className="font-medium text-lg dark:text-white" ><NavLink to="/">Home</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/blog">Blog</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/product">Product</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/deshbord">Deshbord</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/login">Login</NavLink></li>
        <li className="font-medium text-lg dark:text-white"><NavLink to="/card">Card</NavLink></li>
    </>
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        if (theme == "light") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");

        }
    }, [theme])

    const handelClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };



    return (
        <div className=" bg-base-100 dark:bg-slate-800 bg-opacity-60 shadow-md z-50 sticky top-0">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start  max-w-7xl mx-auto">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden dark:text-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-800 border rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl dark:text-white">KENUN</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>

                    <input onClick={handelClick} type="checkbox" className="toggle" />

                </div>
            </div>

        </div>
    );
};

export default Navbar;