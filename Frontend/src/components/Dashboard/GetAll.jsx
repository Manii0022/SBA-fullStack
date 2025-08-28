import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function GetAll() {

    const [data, setData] = useState(null);
    async function GetAllJournal() {
        const headers = new Headers();
        // const token = localStorage.getItem("token");
        const token = localStorage.getItem("token");
        console.log("local storage token ", token);

        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${token}`);

        console.log("ok till here .....");

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
        <>
            <div>
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="mb-2 mt-2 h-[100px] p-2 border rounded">
                            <p><strong>Date :</strong> {
                                item.date.slice(0, 10)
                            }</p>
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