function Landing() {

    return (
        <>

            <header className="">
                <nav className="flex justify-between bg-amber-50 " >

                    <div className="flex gap-10 w-1/2 mt-5 ml-5 items-center">
                        <div className=" h-full text-5xl 
                     font-serif">
                            <div>
                                <img className="size-[100px]" src="https://www.svgrepo.com/show/494022/travel.svg" alt="logo" />
                            </div>

                            <div className="text-xl border-2 border-transparent rounded-lg hover:bg-gray-400
                            hover:text-white hover:border-black">
                                Journal App
                            </div>

                        </div>
                        <div className="    text-5xl
                     font-serif">
                            About
                        </div>
                        <div className="    text-5xl
                     font-serif">
                            Connect

                        </div>
                    </div>

                    <div className="flex justify-end gap-10 w-1/2 mr-5 mt-5 items-center">
                        <div className="    text-5xl
                     font-serif">
                            Login
                        </div>
                        <div className="    text-5xl
                     font-serif">
                            Get Started
                        </div>


                    </div>

                </nav>

            </header>

        </>

    );
}

export default Landing;