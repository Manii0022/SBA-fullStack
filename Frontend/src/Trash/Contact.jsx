import { useEffect } from "react";
import { useLayout } from "../../Context/LayoutContext";

function Contact() {

    const {setShowHeader} = useLayout();
    useEffect(()=>{
        setShowHeader(true);
    },[]);


    return (
        <div className="font-serif">
            <form className=" bg-amber-100  ">
                <p className="text-5xl text-center pt-10 pb-10">Contact Us</p>
                <div className="flex justify-center items-center">  
                    <div className="flex flex-col gap-6 w-1/2">
                        <div className="flex flex-col">
                            <label className="text-xl pb-2" htmlFor="name">Name</label>
                            <input className="border-2 border-gray-400 rounded-[5px] p-2" type="text" name="name" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xl pb-2" htmlFor="email">Email</label>
                            <input className="border-2 border-gray-400 rounded-[5px] p-2" type="email" name="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xl pb-2" htmlFor="message">Message</label>
                            <textarea className="border-2 border-gray-400 rounded-[5px] p-2" name="message" id="message" rows="5" placeholder="Enter your message" required></textarea>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="border-2 border-black rounded-lg px-6 py-2 bg-white 
                            hover:bg-amber-300 ">
                                Submit
                            </button>
                        </div>
                    </div>
                    </div>
            </form>
        </div>
    )
}

export default Contact;