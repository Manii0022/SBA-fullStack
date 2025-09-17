import { NavLink, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from "react";
function Header() {

    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
        { path: '/dashboard', label: 'Dashboard' }
    ];

    const authItems = [
        { path: '/login', label: 'Login', type: 'secondary' },
        { path: '/signup', label: 'Sign Up', type: 'primary' },
    ];

    return (
        <>
            <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <NavLink to="/" className="flex items-center space-x-3">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-slate-800">Journal App</span>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) => `text-sm font-medium transition-colors 
                                        ${isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"}`}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Desktop Auth Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            {authItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${item.type === 'primary'
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : ''
                                        } ${isActive ? "text-blue-600" : "text-slate-600 "}`}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-slate-200 py-4">
                            <div className="space-y-2">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                            }`}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                                <div className="pt-2 border-t border-slate-200 mt-4">
                                    {authItems.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors mb-2 ${item.type === 'primary'
                                                ? 'bg-blue-600 hover:bg-blue-700 text-white text-center'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                                }`}
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header;