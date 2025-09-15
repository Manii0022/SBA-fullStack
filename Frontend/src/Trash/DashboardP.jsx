import { useEffect, useState } from "react";
import { useLayout } from "../Context/LayoutContext";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import GetAll from "./GetAll";

function Dashboard() {

    const { setShowHeader } = useLayout();
    useEffect(() => {
        setShowHeader(true);
    }, [])

    // const [data, setData] = useState(null);
    // async function GetAllJournal() {
    //     const headers = new Headers();
    //     // const token = localStorage.getItem("token");
    //     const token = localStorage.getItem("token");
    //     console.log("local storage token ", token);

    //     headers.append("Content-Type", "application/json");
    //     headers.append("Authorization", `Bearer ${token}`);

    //     console.log("ok till here .....");

    //     const response = fetch("http://localhost:8080/journal", {
    //         method: "GET",
    //         headers: headers,

    //     })
    //     response.then(res => {
    //         console.log("inside response ");
    //         console.log(res);

    //         return res.json()
    //     })
    //         .then(data => {
    //             setData(data)
    //             console.log(data);
    //             return data;
    //         })
    //         .catch(err => console.error("Error fetching journal entries:", err));
    // }

    // function createNewEntry() {
    //     <div>
    //         <form>
    //             <div>
    //                 <p>Title :</p>
    //                 <input type="text" placeholder="Enter Title" />
    //             </div>
    //             <div>
    //                 <p>Content :</p>
    //                 <input type="text" placeholder="Enter Content" />
    //             </div>
    //             <div>
    //                 <button>Continue</button>
    //             </div>
    //         </form>
    //     </div>
    // }

    // const [user, setUser] = useState(null);
    // const [token, setToken] = useState(null);
    // const location = useLocation();

    // useEffect(() => {
    //     const query = new URLSearchParams(location.search);
    //     const token = query.get("token");
    //     setToken(token);
    //     const email = query.get("email");
    //     const name = query.get("name");
    //     const exists = query.get("exists");

    //     if (token) {
    //         localStorage.setItem("token", token);
    //         setUser({ email, name, newUser: true });
    //     } else if (exists) {
    //         setUser({ email, name, newUser: false });
    //     }
    // }, [location.search]);

    // function GetAllJournal() {
    //     { <GetAll /> }
    // }

    return (
        <div className="font-serif ml-10 mr-10 mt-10 ">
            <div>
                <header>
                    <div className="bg-cyan-200 flex justify-between ">
                        <div className="ml-5">
                            <img className="size-[150px]" src="https://images.unsplash.com/vector-1738925655186-02fbc43662cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpvdXJuYWx8ZW58MHx8MHx8fDA%3D" alt="logo" />
                            <span className="text-3xl ">Basic Journal Dashboard</span>
                        </div>
                        <div className="flex-col justify-center items-center content-center mr-5">
                            <span className="text-8xl ">
                                Your Daily Journal
                            </span>
                            <span>
                                {
                                    <div className="text-3xl ml-10 mt-5">
                                        Welcome to your journal dashboard!
                                    </div>
                                }
                            </span>
                        </div>

                    </div>

                    <div className=" bg-amber-300 flex " >
                        <div className="m-2 bg-gray-300 text-center content-center rounded-lg p-2 text-2xl font-bold">
                            Navigations
                        </div>


                        <ul className="w-full text-xl p-4 flex justify-evenly  " >
                            <li className="bg-amber-200 rounded-lg p-2 hover:bg-emerald-300">
                                <NavLink to="get-entry" className="border-transparent  rounded-lg  hover:text-black
                                block pl-3 active:scale-95 transition transform duration-100" >
                                    Get Journal Entries
                                </NavLink>


                            </li>
                            <li className="bg-amber-200 rounded-lg p-2 hover:bg-emerald-300 ">
                                <NavLink to="create-entry" className="border-transparent  rounded-lg  hover:text-black
                                block pl-3 active:scale-95 transition transform duration-100" >
                                    Create New Entry
                                </NavLink>
                            </li>
                            <li className="bg-amber-200 rounded-lg p-2 hover:bg-emerald-300 ">
                                <NavLink to="update-entry" className="border-transparent  rounded-lg  hover:text-black
                                block pl-3 active:scale-95 transition transform duration-100" >
                                    Update existing
                                </NavLink>
                            </li>
                            <li className="bg-amber-200 rounded-lg p-2 hover:bg-emerald-300 ">
                                <NavLink to="delete-entry" className="border-transparent  rounded-lg  hover:text-black
                                block pl-3 active:scale-95 transition transform duration-100" >
                                    Delete Entry
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>

            <div className="mt-10 mb-10 bg-emerald-200 h-fit w-f">
                <Outlet />
            </div>
        </div>
    );

}

export default Dashboard;