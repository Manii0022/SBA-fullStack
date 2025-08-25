import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="">
                <nav className="flex justify-between bg-amber-50 " >

                    <div className="flex gap-10 w-1/2 mt-5 ml-5 items-center">
                        <div className=" h-full text-5xl 
                     font-serif">
                            <div>
                                <img className="size-[100px]" src="https://www.svgrepo.com/show/494022/travel.svg" alt="logo" />
                            </div>

                            <div className="text-xl ">
                                Journal App
                            </div>

                        </div>
                        
                        <div className="text-5xl font-serif border-transparent px-6 py-2 rounded-lg hover:bg-emerald-300
                            hover:text-black">
                            <NavLink
                                to={"connect"}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
                                        lg:p-0`
                                }
                            >
                                Connect
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex justify-end gap-10 w-1/2 mr-5 mt-5 items-center">
                        <div className="text-5xl font-serif border-transparent px-6 py-2 rounded-lg hover:bg-emerald-300
                            hover:text-black">
                            <NavLink
                                to={"contact"}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
                                        lg:p-0`
                                }
                            >
                                Contact us
                            </NavLink>
                        </div>
                        <div className="text-5xl font-serif border-transparent px-6 py-2 rounded-lg hover:bg-emerald-300
                            hover:text-black">
                            <NavLink
                                to={"home"}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
                                        lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </div>
                    </div>

                </nav>
            </header>
    );
}

export default Header;