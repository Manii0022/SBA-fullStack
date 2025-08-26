import React, { useEffect, useRef, useState, } from "react";
import { Link,NavLink, useLocation } from "react-router-dom"
import { useLayout } from "../../Context/LayoutContext";
function Signup() {

    const {setShowHeader, setShowFooter} = useLayout();
    useEffect(()=>{
        setShowFooter(true);
        setShowHeader(false);
    },[]);

    const formRef = useRef(null)

    const handleFormSubmit = (e) => {

        e.preventDefault();
        console.log("form submitted");
        const formData = new FormData(formRef.current)  // this returns FormData object
        const formDataObj = Object.fromEntries(formData.entries())   // this converts FormData object to JS object
        const jsonString = JSON.stringify(formDataObj);  // this converts JS object to JSON string..now this can be sent to backend using fetch or axios
        console.log(formDataObj);   // now we can access particular value using formDataObj.email or formDataObj.password

        console.log(formDataObj.name);

        // The JSON.stringify() method converts a JavaScript object or value to a JSON string.
        // The JSON.parse() function is designed to do the opposite of JSON.stringify(). 
        // It takes a JSON string as input and converts it into a JavaScript object.

    }

    // backend jaha redirect krega(after success) niche ka code whi likha jayega

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
        <div className="font-serif h-screen">
            <div className=" flex-col justify-center items-center content-center h-full w-full">

            <p className=" mb-10 text-center text-8xl text-black ">Signup</p>

            <div className="flex justify-center ">

                {/* left  */}
                 
                <div className="flex-col justify-items-center items-center pr-4 ">
                   
                    <form ref={formRef} className=" pt-3" action="">

                        <div className=" w-75 flex flex-col gap-3">
                                <div className="flex flex-col ">
                                    <p>
                                        Name
                                    </p>
                                    <input className="border-2  border-gray-400 rounded-[5px] " type="text" name="name" placeholder="What should we call you !" />
                                </div>
                                <div className="flex flex-col ">
                                    <p>
                                        Email
                                    </p>
                                    <input className="border-2  border-gray-400 rounded-[5px] " type="email" name="email" placeholder="Enter your email" required />

                                </div>
                                <div className="flex flex-col ">
                                    <p>
                                        Password
                                    </p>
                                    <input className="border-2  border-gray-400  rounded-[5px] " type="password" name="password" placeholder="Enter password" required />
                                </div>
                            

                            <div className="flex justify-center items-center">
                                <button onClick={handleFormSubmit} className="border-2 border-black rounded-lg px-6 py-2 bg-white 
                            hover:bg-amber-300 active:scale-95 transition transform duration-100">
                                    Continue
                                </button>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <div>
                                    Already have an account ?
                                </div>
                                <div className="text-black hover:text-orange-600 active:scale-95 transition transform duration-100">
                                    <Link to="/login">Login</Link>
                                </div>
                                    
                            </div>

                        </div>

                    </form>
                </div>

                {/* middle */}
                <div className=" w-10 flex flex-col items-center pl-5 pr-5">
                    <div className=" bg-black h-[45%] w-[2px] ">
                    </div>
                    <div className="  h-[10%] w-5">
                        <span>or</span>

                    </div>
                    <div className=" bg-black h-[45%] w-[2px]">

                    </div>
                </div>

                {/* signup  */}
                {/* right */}
                <div className="flex justify-center items-center pl-4 ">
                    <div className="border-2 border-black rounded-lg px-3 py-1 flex hover:shadow-2xl
                    active:scale-95  transform hover:bg-emerald-300 transition-all duration-300">
                        <img
                            className="h-10"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                            alt=""
                        />
                        <button onClick={() => (window.location.href = "http://localhost:8080/oauth2/authorization/google")}>
                            Signup with Google
                        </button>
                    </div>

                    <div>
                        {user && (
                            <div className="mt-4 p-4 border rounded">
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p className=" w-full overflow-auto ">Token : {token}</p>
                                <p>{user.newUser ? "Signed up successfully!" : "You are already signed up, please login."}</p>
                            </div>
                        )}

                    </div>
                </div>

            </div>
            </div>

        </div>
    )
}

export default Signup;