import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpen, Home, Plus, Search, Edit, Trash2, Outdent } from 'lucide-react';
import { useLayout } from '../../Context/LayoutContext';

const DashboardLayout = ({ children }) => {

    const { setShowHeader } = useLayout();
    useEffect(()=>{
        setShowHeader(false);
    })
    const location = useLocation();

    const navItems = [
        { path: '/dashboard', icon: Home, label: 'Dashboard' },
        { path: '/dashboard/get-entry', icon: Search, label: 'Get Entry' },
        { path: '/dashboard/create-entry', icon: Plus, label: 'Create Entry' },
        { path: '/dashboard/update-entry', icon: Edit, label: 'Update Entry' },
        { path: '/dashboard/delete-entry', icon: Trash2, label: 'Delete Entry' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <BookOpen className="h-8 w-8 text-blue-600" />
                            <h1 className="text-xl font-bold text-slate-800">Journal App</h1>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation */}
            <nav className="md:hidden bg-white border-b border-slate-200">
                <div className="flex overflow-x-auto px-4 py-2 space-x-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${isActive
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                            >
                                <Icon className="h-4 w-4" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;