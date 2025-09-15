import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw, BookOpen, AlertTriangle, ArrowLeft } from 'lucide-react';

const Error = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [floatingElements, setFloatingElements] = useState([]);

    useEffect(() => {
        setIsVisible(true);

        // Generate floating elements
        const elements = Array.from({ length: 6 }, (_, i) => ({
            id: i,
            delay: i * 0.5,
            duration: 3 + Math.random() * 2,
            x: Math.random() * 100,
            y: Math.random() * 100,
        }));
        setFloatingElements(elements);
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {floatingElements.map((element) => (
                    <div
                        key={element.id}
                        className="absolute opacity-10"
                        style={{
                            left: `${element.x}%`,
                            top: `${element.y}%`,
                            animationDelay: `${element.delay}s`,
                            animationDuration: `${element.duration}s`,
                        }}
                    >
                    </div>
                ))}
            </div>

            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
                    {Array.from({ length: 144 }, (_, i) => (
                        <div
                            key={i}
                            className="bg-blue-200 rounded-full"
                            style={{
                                animationDelay: `${(i * 0.1) % 3}s`,
                                animationDuration: '3s',
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Error Content */}
            <div className={`relative z-10 text-center max-w-2xl mx-auto px-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>

                {/* Animated 404 Number */}
                <div className="relative mb-8">
                    <div className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600  to-pink-600 ">
                        404
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 animate-fade-in">
                        Oops! Page Not Found
                    </h1>
                    <div className="relative">
                        <p className="text-lg text-slate-600 animate-fade-in-delay">
                            Looks like this page got lost in your journal...
                        </p>

                    </div>
                    <p className="text-slate-500 animate-fade-in-delay-2">
                        Don't worry, it's not you, it's us . Let's get you back on track!
                    </p>
                </div>

                {/* Animated Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Link
                        to="/"
                        className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slide-up"
                    >
                        <Home className="h-5 w-5 group-hover:animate-bounce" />
                        <span>Back to Home</span>
                    </Link>

                    <button
                        onClick={handleRefresh}
                        className="group inline-flex items-center space-x-3 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl animate-slide-up-delay"
                    >
                        <RefreshCw className="h-5 w-5 group-hover:animate-spin" />
                        <span>Try Again</span>
                    </button>
                </div>

                {/* Animated Journal Quote */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg animate-fade-in-delay-3">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="bg-blue-100 rounded-full p-3 animate-pulse">
                                <BookOpen className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-slate-700 italic mb-2">
                                "Every mistake is a way to learn something better. Even this 404 is part of your story."
                            </p>
                            <p className="text-sm text-slate-500">— Journal App</p>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb Navigation */}
                <div className="mt-8 animate-fade-in-delay-4">
                    <nav className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-slate-400">404 Error</span>
                    </nav>
                </div>
            </div>

            {/* Custom CSS Animations */}
            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.9s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 1.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
        </div>
    );
};

export default Error;