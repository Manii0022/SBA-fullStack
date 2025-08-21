import React from "react";
import { Link } from "react-router-dom"
function Signup() {

    return (
        <div className="font-serif">

            <div className="flex justify-center ">

                <div className="flex-col justify-items-center items-center pr-4">
                    <p className="text-4xl text-black">Signup</p>
                    <form className=" pt-3" action="">

                        <div className=" w-75 flex flex-col gap-3">
                            <div>
                                <div className="flex flex-col ">
                                    <p>
                                        name
                                    </p>
                                    <input className="border-2  border-gray-400 rounded-[5px] " type="text" name="name" placeholder="What should we call you !" />
                                </div>
                                <div className="flex flex-col ">
                                    <p>
                                        email
                                    </p>
                                    <input className="border-2  border-gray-400 rounded-[5px] " type="email" name="email" placeholder="Enter your email" required />

                                </div>
                                <div className="flex flex-col ">
                                    <p>
                                        password
                                    </p>
                                    <input className="border-2  border-gray-400  rounded-[5px] " type="password" name="password" placeholder="Enter password" required />
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <button className="border-2 border-black rounded-lg px-6 py-2 bg-white 
                            hover:bg-amber-300 ">
                                    Continue
                                </button>
                            </div>

                            <div>
                                <span>Already have an account ? login {/*<Link to="/login">login</Link>  this will work once routers are created*/} </span>
                            </div>

                        </div>

                    </form>
                </div>

                <div className=" w-10 flex flex-col items-center pl-5 pr-5">
                    <div className=" bg-black h-[45%] w-[2px] ">
                    </div>
                    <div className="  h-[10%] w-5">
                        <span>or</span>

                    </div>
                    <div className=" bg-black h-[45%] w-[2px]">

                    </div>
                </div>

                <div className="flex justify-center items-center pl-4">
                    <span className="border-2 border-black rounded-lg px-3 py-1 flex 
                    hover:shadow-2xl hover:bg-emerald-300  transition-all duration-300 ">
                        <img className=" h-10 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
                        <button className=" ">
                            Signup with Google
                        </button>
                        
                    </span>

                </div>

            </div>

        </div>
    )
}

export default Signup;