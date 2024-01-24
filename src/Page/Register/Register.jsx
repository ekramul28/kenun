import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import imageUpload from "../../api/utils";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
    const navigate = useNavigate()
    const { registration, updateUserProfile } = useAuth()
    const [registerError, setRegisterError] = useState('');
    const [AllDistrict, setAllDistrict] = useState([])
    const [AllUpazilas, setAllUpazilas] = useState([])
    const axiosPublic = useAxiosPublic();
    const { data: division = [] } = useQuery({
        queryKey: ['division'],
        queryFn: async () => {
            const res = await axiosPublic('/division')
            return res.data;
        }
    })

    const handelDivision = async (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        console.log(option);
        const res = await axiosPublic.get(`/districts/${option}`)
        setAllDistrict(res.data)
    }
    const handelDistrict = async (e) => {
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        const res = await axiosPublic.get(`/upazilas/${option}`)
        setAllUpazilas(res.data)
    }

    const handelForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.ConfirmPassword.value;
        const division = form.division.value;
        const district = form.district.value;
        const upazilas = form.upazilas.value;
        const photoURL = form.imgUrl.files[0];
        console.log({ name, email, password, confirmPassword, division, district, upazilas, photoURL })
        setRegisterError('')
        if (password.length < 6) {
            return Swal.fire('Password must be at least 6 characters');

        } if (!/[A-Z]/.test(password)) {
            return Swal.fire('Password must be a Uppercase letter');

        }
        if (!/[a-z]/.test(password)) {
            return Swal.fire('Password must be a Lowercase letter');

        }
        if (!/[0-9]/.test(password)) {
            return Swal.fire('Password must be a number ')

        }
        if (!(password == confirmPassword)) {
            return Swal.fire('password or confirmPassword not equal ')
        }
        try {
            const image = await imageUpload(photoURL)
            const result = await registration(email, password);
            console.log(result);
            console.log(image);
            await updateUserProfile(name, image?.data?.display_url)
            if (result?.user?.email) {
                form.reset();
                Swal.fire('Register Successful')
                navigate((location?.state?.pathname) ? location?.state.pathname : '/')
            }
        } catch (error) {
            setRegisterError(error?.message)
        }
    }

    return (
        <div className="hero min-h-screen dark:bg-slate-800 ">
            <div className="hero-content  flex-col w-80 md:w-[400px]  lg:w-[900px]">
                <div className="text-center lg:text-left">
                </div>
                <div className="card flex-shrink-0 w-full   ">
                    <h1 className="text-5xl font-bold my-6 dark:text-sky-500">Register</h1>

                    <form onSubmit={handelForm} className="card-body ">
                        <div className='lg:flex justify-between gap-3'>
                            <div className='lg:w-1/2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Name</span>
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        placeholder="Name"
                                        className="input  input-bordered rounded-none"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        name="email"
                                        className="input  input-bordered rounded-none"
                                        required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered rounded-none"
                                        required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="ConfirmPassword"
                                        placeholder="Confirm Password"
                                        className="input input-bordered rounded-none"
                                        required />

                                </div>

                            </div>




                            <div className='lg:w-1/2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Division</span>
                                    </label>
                                    <select name="division" className="select select-bordered w-full  input  rounded-none" onClick={handelDivision}>
                                        <option disabled selected required value="DEFAULT" >Select Your Division</option>
                                        {
                                            division.map(division => (
                                                <option
                                                    key={division._id}
                                                    className="text-black "
                                                    value={division?.name}
                                                    id={division?.id} >
                                                    {division?.name}
                                                </option>))
                                        }

                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white" >District</span>
                                    </label>
                                    <select name="district" className="select select-bordered w-full  input  rounded-none" onClick={handelDistrict}>
                                        <option disabled selected required>Select Your District</option>
                                        {
                                            AllDistrict.map(district => (
                                                <option
                                                    key={district._id}
                                                    value={district?.name}
                                                    id={district.id}>
                                                    {district?.name}
                                                </option>))
                                        }

                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white" >upazilas</span>
                                    </label>
                                    <select name="upazilas" className="select select-bordered w-full  input  rounded-none" >
                                        <option disabled selected required>Select Your upazilas</option>
                                        {
                                            AllUpazilas.map(upazilas => (
                                                <option
                                                    key={upazilas._id}
                                                    value={upazilas?.name}
                                                    id={upazilas.id}>
                                                    {upazilas?.name}
                                                </option>))
                                        }

                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-white">imgUrl</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder="imgUrl"
                                        name="imgUrl"
                                        className="file-input  input-bordered rounded-none "
                                        required />
                                </div>

                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn  text-white dark:bg-sky-500 bg-slate-800 dark:text-white border-none rounded-none">Register</button>
                            <div className="mt-3">
                                <p className="text-xl dark:text-white">you have Account  please
                                    <Link
                                        to="/login"
                                        className=" text-2xl ml-3 text-sky-500">
                                        login
                                    </Link>
                                </p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-red-500">
                                    {registerError}
                                </h1>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;