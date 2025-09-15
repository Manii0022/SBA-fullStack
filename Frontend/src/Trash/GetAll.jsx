import React, { useState } from "react";
import { useEffect } from "react";


function GetAll() {

    const [data, setData] = useState(null);
    useEffect(() => {

        const headers = new Headers();
        const token = localStorage.getItem("token");
        console.log("local storage token ", token);

        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${token}`);
        const response = fetch("http://localhost:8080/journal", {
            method: "GET",
            headers: headers,
        })
        response.then(res => {
            console.log("inside response ");
            console.log(res);

            return res.json()
        })
            .then(data => {
                setData(data)
                console.log(data);
                return data;
            })
            .catch(err => console.error("Error fetching journal entries:", err));
    }, []);


    // const [user, setUser] = useState(null);
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

    return (
        <>
            <div className="m-4 p-4">

                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="mb-2 mt-2 h-[100px] p-2 border rounded">
                            <div className="flex justify-between gap-4">
                                <div className="flex gap-4">
                                    <p><strong>Date and Time :</strong></p>
                                    <p>{item.date.slice(0, 10)}</p>
                                    <p>{item.date.slice(11, 19)}</p>
                                </div>
                                <div className="mr-10">
                                    <p>Id : {item.id}</p>
                                </div>


                            </div>

                            <p><strong>Title:</strong> {item.title}</p>
                            <p><strong>Content:</strong> {item.content}</p>

                        </div>
                    ))
                ) : (
                    <p>No journal entries found.</p>
                )}
            </div>

        </>
    )
}

export default GetAll;