import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import SimpleProfile from "../Profile/SimpleProfile";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { user, } = useAuth();
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const { pathname } = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prevValue = scrollY.getPrevious();
        if (latest > prevValue && latest > 30) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const NavItems = [
        {
            name: "Home",
            PathName: "/"
        },
        {
            name: "Collection",
            PathName: "/collection"
        },
        {
            name: "Cart",
            PathName: "/cart"
        },
        {
            name: "Checkout",
            PathName: "/checkout"
        },

    ]

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
        <motion.div
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className={`bg-base-100 dark:bg-slate-800  shadow-md fixed top-0 left-0 z-[12] w-full ${pathname === "/login" || pathname === "/register" ? "hidden" : ""
                }  h-max  `}
        >


            <div className="navbar max-w-7xl mx-auto h-[70px]">
                <div className="navbar-start  max-w-7xl mx-auto">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden dark:text-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-800 border rounded-box w-52 ">


                            {
                                NavItems.map(({ name, PathName }) => <div key={name}>
                                    <li className="font-medium text-lg dark:text-white dark:bg-slate-800"> <NavLink to={PathName}>{name}</NavLink></li>
                                </div>)
                            }
                        </ul>
                    </div>
                    <Link to="/" className="font-bold underline text-2xl dark:text-white">KENUN</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    {/* <ul className="menu menu-horizontal px-1"> */}
                    <ul className="hidden lg:flex justify-center gap-6 w-[100%]  items-center pl-[5%] ">
                        {NavItems.map(({ name, PathName }) => (
                            <li key={name} >
                                <NavLink
                                    to={PathName}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "border-b border-black text-lg  dark:border-white dark:text-white font-semibold"
                                            : "nav-button  text-lg  dark:text-white border-black hover:border-b font-semibold dark:border-white hover:ease-out hover:delay-200 hover:duration-500 hover:cursor-pointer"

                                    }
                                >
                                    {name}
                                </NavLink>{" "}
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="hidden md:block dark:text-white ">
                        {
                            user && <p className="font-semibold">{user?.displayName}</p>
                        }
                    </div>

                    {
                        user && <>

                            <SimpleProfile></SimpleProfile>
                        </>

                    }
                    <div className="text-3xl dark:text-white hover:cursor-pointer">
                        {
                            theme === "dark" ? <CiDark onClick={handelClick}></CiDark> : <MdSunny onClick={handelClick}></MdSunny>
                        }
                    </div>
                    {
                        user ? '' : <Link to="/login" className="text-white dark:bg-sky-500  py-2 px-4 rounded-full bg-black font-medium ">Login</Link>
                    }
                </div>
            </div >



        </motion.div>


    );
};

export default Navbar;