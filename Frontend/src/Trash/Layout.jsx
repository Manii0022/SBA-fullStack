import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useLayout } from "../Context/LayoutContext";

function Layout () {

    const {showHeader, showFooter} = useLayout();

    return(
        <>
        <div >
        {showHeader &&  <Header/>}   {/* now whenever you need to show header, make showHeader=true in useEffect in that component */}
        <Outlet/>
        {showFooter &&  <Footer/>}
        </div>
        </>
    )
}

export default Layout;