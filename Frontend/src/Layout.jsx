import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useLayout } from "./Context/LayoutContext";

function Layout () {

    const {showHeader, showFooter} = useLayout();

    return(
        <>
        <div className="bg-[url('https://i.pinimg.com/736x/7e/0d/72/7e0d726de23526d9b02c2663c02f6227.jpg')] bg-no-repeat bg-cover w-full h-screen ">
        {showHeader &&  <Header/>}   {/* now whenever you need to show header, make showHeader=true in useEffect in that component */}
        <Outlet/>
        {showFooter &&  <Footer/>}
        </div>
        </>
    )
}

export default Layout;