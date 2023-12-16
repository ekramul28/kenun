import { Outlet } from "react-router-dom";
import Navbar from "../Page/Header/Navbar";
import Footer from "../Page/Footer/Footer";
const Root = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;