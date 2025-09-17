import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, Linkedin, Github, Mail } from 'lucide-react';
function Footer() {

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];


    return (
        <>
            <footer className="bg-white border-t border-slate-200 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    <div className="flex justify-between md:grid-cols-4">
                        {/* App info */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <span className="text-xl font-bold text-slate-800">Journal App</span>
                            </div>
                            <p className="text-slate-600 mb-4 max-w-md">
                                Your personal space for reflection, growth, and capturing life's meaningful moments.
                                Start your journaling journey today.
                            </p>
                        </div>

                        {/* quick links */}
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.path}>
                                        <Link to={item.path} className="text-slate-600 hover:text-blue-600 transition-colors">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* get started */}
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-4">Get Started</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/signup" className="text-slate-600 hover:text-blue-600 transition-colors">
                                        Create Account
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="text-slate-600 hover:text-blue-600 transition-colors">
                                        Sign up
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" className="text-slate-600 hover:text-blue-600 transition-colors">
                                        Log In
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* get in touch */}
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-4">Connect with us</h3>
                            <ul className='space-y-2'>
                                <li>
                                    <div className="flex space-x-2">
                                        <Linkedin />
                                        <span className='hover:text-blue-500'>
                                            <a
                                                href="http://www.linkedin.com/in/manish-lodhi-87392a295"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                LinkedIn
                                            </a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex space-x-2">
                                        <Github />
                                        <span className='hover:text-blue-500'>
                                            <a
                                                href="https://github.com/Manii0022"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Github
                                            </a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex space-x-2">
                                        <Mail />
                                        <span>
                                            manishlodhi0224@gmail.com
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="  border-t border-slate-200 mt-4 pt-4 text-center">

                        <p className="text-slate-500 text-sm">
                            © 2025 Journal App. All rights reserved. Made with ❤️.
                        </p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer;