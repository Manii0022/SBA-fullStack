import { useEffect, useState } from "react";
import { useLayout } from "../../Context/LayoutContext";
import { useLocation } from "react-router-dom";

function Dashboard() {

    const { setShowHeader } = useLayout();
    useEffect(() => {
        setShowHeader(false);
    }, [])

    const [data, setData] = useState(null);


    function handleClick() {
        console.log("button clicked");
        fetch("https://reqres.in/api/users?page=2", {
            headers: {
                "x-api-key": "reqres-free-v1",
            }
        })
            .then(res => res.json())
            .then(res => {
                setData(res)
                console.log(JSON.stringify(res.data))
            })
            .catch(error => console.log(`Cannot fetch data ${error}`));
    }

     const [user, setUser] = useState(null);
        const [token, setToken] = useState(null);
        const location = useLocation();
    
        useEffect(() => {
            const query = new URLSearchParams(location.search);
            const token = query.get("token");
            setToken(token);
            const email = query.get("email");
            const name = query.get("name");
            const exists = query.get("exists");
    
            if (token) {
                localStorage.setItem("token", token);
                setUser({ email, name, newUser: true });
            } else if (exists) {
                setUser({ email, name, newUser: false });
            }
        }, [location.search]);


    return (
        <div className="font-serif ml-10 mr-10 mt-10 ">
            <div className="bg-cyan-200 flex justify-around ">
                <div>
                    <img className="size-[150px]" src="https://images.unsplash.com/vector-1738925655186-02fbc43662cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpvdXJuYWx8ZW58MHx8MHx8fDA%3D" alt="logo" />
                    <span className="text-3xl ">Basic Journal Dashboard</span>
                </div>
                <div className="flex justify-center items-center ">
                    <span className="text-8xl ">
                        Your Daily Journal
                    </span>
                </div>

            </div>

            <div className="flex bg-amber-300 ">

                <div className="w-[25%]" >
                    <div className="mt-6 bg-gray-300 w-80 rounded-lg p-2 ml-2">
                        <span className="text-2xl font-bold  p-2 rounded-lg">
                            Navigations
                        </span>
                    </div>
                    <div >
                        <ul className="text-xl p-4 space-y-2 w-80" >
                            <li className="bg-amber-200 rounded-lg p-2 hover:bg-emerald-300">
                                <button onClick={handleClick} className="border-transparent  rounded-lg  hover:text-black
                                block pl-3 active:scale-95 transition transform duration-100">
                                    Get Journal Entries</button>

                            </li>
                            <li className="bg-amber-200 rounded-lg p-2 hover:bg-emerald-300 ">
                                <button className="border-transparent  rounded-lg  hover:text-black
                                block pl-3 active:scale-95 transition transform duration-100">
                                    Create new Entry</button>
                            </li>
                            <li className="bg-amber-200 rounded-lg p-2 hover:bg-emerald-300 ">
                                <button className="border-transparent  rounded-lg  hover:text-black
                                block pl-3 active:scale-95 transition transform duration-100">
                                    Update Existing</button>
                            </li>
                            <li className="bg-amber-200 rounded-lg p-2 hover:bg-emerald-300 ">
                                <button className="border-transparent  rounded-lg  hover:text-black
                                block pl-3 active:scale-95 transition transform duration-100">
                                    Delete Entry</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-amber-100 w-[75%] flex justify-center items-center text-xl">
                    <div className="max-w-full break-words p-4">
                        {
                            data ? (
                                <ul>
                                    {data.data.map(user => (
                                        <li key={user.id}>{user.email}</li>
                                    ))}
                                </ul>
                            ) : "Loading user data..."
                        }
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;