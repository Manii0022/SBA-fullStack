import React, { useEffect } from "react"
import { useLayout } from "../../Context/LayoutContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

    const formRef = React.useRef(null);
    const [user , setUser] = React.useState(null);

    const { setShowHeader } = useLayout();
    useEffect(() => {
        setShowHeader(false);
    }, []);

    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current)
        const formDataObj = Object.fromEntries(formData.entries())

        const userName = formDataObj.name
        const password = formDataObj.password
        const body = JSON.stringify(
            {
                userName: userName,
                password: password
            }
        )
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json")

            const response = await fetch("http://localhost:8080/public/login", {
                method: "POST",
                body:body,
                headers: myHeaders
            })            
            if (response.ok) {
                const data = await response.text();             
                const token = data;
                console.log(data);
                localStorage.setItem("token", token);
                formRef.current.reset();
                navigate("/dashboard");
            }
            else {
                const errorMsg = await response.text();
                window.alert("Login failed : " + errorMsg);
            }
        } catch (error) {
            window.alert("Network error while signup ❌");
            console.error(error);
        }
    };

    return (

        <div className="flex justify-center py-10 h-screen w-full font-serif">
            <div className=" flex-col justify-center items-center content-center h-full w-full">
                <p className=" mb-10 text-center text-8xl text-black ">Login </p>
                <div className="flex justify-center ">

                    {/* left */}
                    <div className="flex-col justify-items-center content-center  pr-4">
                        <form ref={formRef} className=" pt-3" action="">

                            <div className=" w-75 flex flex-col gap-3">
                                <div>

                                    <div className="flex flex-col ">
                                        <p>
                                            name
                                        </p>
                                        <input className="border-2  border-gray-400 rounded-[5px] " type="name" name="name" placeholder="Enter your name" required />

                                    </div>
                                    <div className="flex flex-col ">
                                        <p>
                                            password
                                        </p>
                                        <input className="border-2  border-gray-400  rounded-[5px] " type="password" name="password" placeholder="Enter password" required />
                                    </div>
                                </div>

                                <div className="flex justify-center items-center">
                                    <button onClick={handleFormSubmit} className="border-2 border-black rounded-lg px-6 py-2 bg-white 
                            hover:bg-amber-300 active:scale-95 transition transform duration-100">
                                        Continue
                                    </button>
                                </div>

                            </div>
                        </form>

                        <div className="flex justify-center items-center gap-2 mt-6">

                            <div className="text-black hover:text-orange-600 active:scale-95 transition transform duration-100">
                                <Link to="/signup">Signup Instead</Link>
                            </div>

                        </div>
                    </div>

                    {/* middle */}
                    <div className=" w-10 flex flex-col justify-center items-center pl-5 pr-5">
                        <div className=" bg-black h-[35%] w-[2px]">
                        </div>
                        <div className="  h-[10%] w-5">
                            <span>or</span>

                        </div>
                        <div className=" bg-black h-[35%] w-[2px]">

                        </div>
                    </div>

                    {/* right */}
                    <div className="flex justify-center items-center pl-4">
                        <span className="border-2 border-black rounded-lg px-3 py-1 flex 
                    hover:shadow-2xl hover:bg-emerald-300  transition-all  active:scale-95  transform duration-100 ">
                            <img className=" h-10 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
                            <button className=" " onClick={() => (window.location.href = "http://localhost:8080/oauth2/authorization/google")}>
                                Login with Google
                            </button>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login