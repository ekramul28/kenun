import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import InputButton from '../../Components/Input/InputButton';

const ContactUs = () => {
    return (
        <div>
            <div className="hero h-[700px] lg:h-[500px] gradient ">
                <div className="hero-content text-center text-white">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold ">Contact Us</h1>
                        <p className="mb-5">Call our toll-free number or visit our website to connect with our dedicated customer service team. Were here to assist you 24/7.</p>
                        <div className="lg:flex justify-between items-center">
                            <div className='lg:w-1/2'>
                                <div className='flex  items-center'>
                                    <div className='bg-white m-4 rounded-full h-10 w-10 flex justify-center items-center '>
                                        <FaLocationArrow className='font-xl text-black'></FaLocationArrow>
                                    </div>
                                    <div className='text-start'>
                                        <h1>Address</h1>
                                        <p>4567 Chowgacha Rode,jessore,500938</p>
                                    </div>
                                </div>
                                <div className='flex  items-center'>
                                    <div className='bg-white m-4 rounded-full h-10 w-10 flex justify-center items-center '>
                                        <FaPhone className='font-xl text-black'></FaPhone>

                                    </div>
                                    <div className='text-start'>
                                        <h1>Phone</h1>
                                        <p>+8801762477828</p>
                                    </div>
                                </div>
                                <div className='flex  items-center'>
                                    <div className='bg-white m-4 rounded-full h-10 w-10 flex justify-center items-center '>

                                        <MdEmail className='font-xl text-black'></MdEmail>
                                    </div>
                                    <div className='text-start'>
                                        <h1>Email</h1>
                                        <p>mdekramulhassan168@gamil.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className='lg:w-1/2'>
                                <div className="  ">
                                    <h1 className="text-xl my-2 text-white">send Message</h1>
                                    <InputButton type="text" name="name" placeholderName="Full Name" />
                                    <InputButton type="text" name="email" placeholderName="Type Your email " />
                                    <InputButton type="text" name="message" placeholderName="Type Your Message " />
                                    <input className='text-whit btn border-none lg:my-3' type="submit" value="Send" />
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;