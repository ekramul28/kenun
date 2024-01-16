import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
const SimpleProfile = () => {
    const { user, logOut } = useAuth();
    const handelButton = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, LogOut'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(result => {
                        console.log(result);
                        Swal.fire('Logout succesfull');
                    })

            }
        })

    };
    return (
        <details className=" duration-[.4s] dropdown dropdown-bottom dropdown-end hover:cursor-pointer">
            <summary className="flex "><img className="w-10 h-10 md:w-14 md:h-14 mx-1  rounded-full" src={user?.photoURL} alt="" /></summary>
            <div className="my-4 -mr-8 md:-mr-2 menu dropdown-content    ">
                <div className="dark:bg-slate-800 dark:text-white p-6 bg-slate-100 shadow-2xl rounded-box">
                    <p className="flex justify-center text-xl">{user?.email}</p>
                    <div className="flex justify-center items-center">
                        <img className="w-10 h-10 md:w-24 md:h-24 mt-5 mx-1  rounded-full " src={user?.photoURL} alt="" />
                    </div>
                    <p className="flex justify-center text-2xl my-6">{user?.displayName}</p>
                    <div className="flex justify-center items-center gap-3 mt-4 mb-2">
                        <Link to="/dashboard/profile"
                            className=" btn  rounded-none text-xl md:w-44 text-white dark:bg-sky-500 bg-slate-800 dark:text-white border-none  ">
                            <CgProfile></CgProfile> Profile
                        </Link>
                        <button onClick={handelButton}
                            className=" btn  rounded-none text-xl md:w-44 text-white dark:bg-sky-500 bg-slate-800 dark:text-white border-none hover:cursor-pointer	 ">
                            <FiLogOut></FiLogOut>Sign out
                        </button>
                    </div>
                </div>
            </div>
        </details>
    );
};

export default SimpleProfile;