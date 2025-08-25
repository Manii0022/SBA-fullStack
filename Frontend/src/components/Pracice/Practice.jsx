import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Practice() {
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const token = query.get("token");
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
        <div className="flex flex-col justify-center items-center pl-4">
            <span className="border-2 border-black rounded-lg px-3 py-1 flex hover:shadow-2xl hover:bg-emerald-300 transition-all duration-300">
                <img
                    className="h-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                    alt=""
                />
                <button onClick={() => (window.location.href = "http://localhost:8080/oauth2/authorization/google")}>
                    Signup with Google
                </button>
            </span>

            {user && (
                <div className="mt-4 p-4 border rounded">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>{user.newUser ? "Signed up successfully!" : "You are already signed up, please login."}</p>
                </div>
            )}
        </div>
    );
}

export default Practice;
