import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLayout } from "../../Context/LayoutContext";
import { useEffect } from "react";

function Connect() {

    const { setShowHeader } = useLayout();
    useEffect(() => {
        setShowHeader(true);
    }, [])
    return (
        <div className="w-full h-64 bg-[url('https://images.unsplash.com/photo-1456428746267-a1756408f782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ubmVjdHxlbnwwfDB8MHx8fDA%3D')] bg-repeat bg-auto">
        </div>

    );
}

export default Connect;