import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useLayout } from "./Context/LayoutContext";

function Layout () {

    const {showHeader, showFooter} = useLayout();

    return(
        <>
        {showHeader &&  <Header/>}   {/* now whenever you need to show header, make showHeader=true in useEffect in that component */}
        <Outlet/>
        {showFooter &&  <Footer/>}
        </>
    )
}

export default Layout;