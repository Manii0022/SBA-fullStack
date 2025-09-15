import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {


    const navigate = useNavigate();

    const handleScrollToFooter = () => {
        // keep user on current route
        navigate(window.location.pathname, { replace: true });

        // scroll smoothly to footer
        setTimeout(() => {
            document.getElementById("footer")?.scrollIntoView({
                behavior: "smooth",
            });
        }, 100);
    };

    return (
        <header className="">
            <nav className="flex items-center justify-between px-6 py-4" >

                {/* Left section */}
                <div className="flex gap-10 items-center">
                    <div className=" h-full text-5xl 
                     font-serif">
                        <div>
                            <img className="size-[100px]" src="https://www.svgrepo.com/show/494022/travel.svg" alt="logo" />
                        </div>

                        <div className="text-xl ">
                            Journal App
                        </div>

                    </div>

                    <div className="text-5xl font-serif border-transparent px-6 py-2 rounded-lg 
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

                    <div className="text-5xl font-serif border-transparent px-6 py-2 rounded-lg 
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

                    <div className="text-5xl font-serif border-transparent px-6 py-2 rounded-lg 
                            hover:text-black">
                        <NavLink
                            to={"contact"}
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         hover:text-orange-700 active:scale-95 transition transform duration-100`
                            }
                        >
                            Contact us
                        </NavLink>
                    </div>



                </div>


            </nav>
        </header>
    );
}

export default Header;