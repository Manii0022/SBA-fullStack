import { Outlet } from 'react-router-dom';
import HeaderN from "./Header/Header.jsx";
import FooterN from "./Footer/Footer.jsx"

function LandingLayout() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Navigation Header */}
            <HeaderN />


            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>

            {/* Footer */}
            <FooterN />
        </div>
    );
};

export default LandingLayout;