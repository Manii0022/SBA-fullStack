import { NavLink, useNavigate } from "react-router-dom";
import { useLayout } from "../../Context/LayoutContext";
import { useEffect } from "react";

function Home() {

    const navigate = useNavigate();

    const { setShowHeader } = useLayout();
    useEffect(() => {
        setShowHeader(false);
    }, [])

    const handleConnect = (e) => {
        e.preventDefault(); // stop NavLink's default navigation
        navigate("/footer"); // navigate manually
    };

    return (
        <div className="font-serif">

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

            <div className="">
                <main className="ml-[70px] mr-[70px] pt-[20px] ">
                    <section>
                        <div className="text-5xl flex justify-center">
                            Welcome to the Journal App
                        </div>
                        <div className="flex pt-10">
                            <img className="bg-cover pt-5" src="https://images.unsplash.com/photo-1471970394675-613138e45da3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am91cm5hbHxlbnwwfDJ8MHx8fDA%3D" alt="img" />
                            <div className=" pl-7 pt-5 text-2xl flex justify-center align-middle text-justify">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ex repellat ipsa eius minus
                                fuga quae, doloribus est nostrum necessitatibus? Odit ut saepe quo laborum unde explicabo doloribus totam omnis!
                                Temporibus vitae odio labore aut velit praesentium, rem magnam expedita incidunt eveniet itaque tempora saepe, vel ipsam eius possimus. Amet laborum aperiam deserunt repellendus nostrum cumque inventore nemo eum nobis!
                                In voluptatem aliquam nulla veritatis cumque quia nostrum, vel voluptatibus quaerat inventore similique facilis neque qui exercitationem mollitia explicabo, minus suscipit placeat magni. Blanditiis, corrupti? Blanditiis sit ab numquam voluptas.
                                Nobis earum porro vitae in quos dolore at. Unde reiciendis quam provident aliquid. At eius iure incidunt voluptatibus optio nulla debitis. Ut iste, inventore architecto ipsum quos aut? Veniam, temporibus.
                                Voluptatum aliquam praesentium, rerum qui voluptates optio magnam recusandae est distinctio sapiente, adipisci ipsum illum animi impedit assumenda vero! Eius dicta quod sed quasi minima esse magnam eaque eos delectus!
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>

    );
}

export default Home;