import { NavLink } from "react-router-dom";

function MainHeader() {

    return (

        <div>
            <header className="">
                <nav className="flex justify-between " >

                    {/* Left section */}
                    <div className="flex gap-10 px-6 py-4 items-center">
                        <div className="text-5xl ">
                            <div>
                                <img className="size-[100px]" src="https://www.svgrepo.com/show/494022/travel.svg" alt="logo" />
                            </div>

                            <div className="text-xl ">
                                Journal App
                            </div>

                        </div>
                        <div className="text-5xl border-transparent  rounded-lg hover:bg-emerald-300
                            hover:text-black">
                            <NavLink
                                to={""}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         hover:text-orange-700 active:scale-95 transition transform duration-100`
                                }
                            >
                                Home
                            </NavLink>
                        </div>

                        <div className="text-5xl border-transparent rounded-lg hover:bg-emerald-300
                            hover:text-black">
                            <NavLink
                                to={"connect"}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         hover:text-orange-700 active:scale-95 transition transform duration-100`
                                }
                            >
                                Connect
                            </NavLink>
                        </div>

                        <div className="text-5xl border-transparent rounded-lg hover:bg-emerald-300
                            hover:text-black">
                            <NavLink
                                to={"contact"}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         hover:text-orange-700 active:scale-95 transition transform duration-100`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>

                    {/* right section */}

                    <div className="flex justify-between gap-7 items-center px-6 py-2 mr-5">
                        <div className="text-5xl border-transparent  rounded-lg hover:bg-emerald-300
                            hover:text-black">
                            <NavLink
                                to={"signup"}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         hover:text-orange-700 active:scale-95 transition transform duration-100`
                                }
                            >
                                Signup
                            </NavLink>
                        </div>

                        <div className="text-5xl border-transparent  rounded-lg hover:bg-emerald-300
                            hover:text-black">
                            <NavLink
                                to={"login"}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         hover:text-orange-700 active:scale-95 transition transform duration-100`
                                }
                            >
                                Login
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

    )
}

export default MainHeader;