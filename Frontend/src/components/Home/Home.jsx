import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Shield, Zap, ArrowRight, Star, CheckCircle, PenTool, Calendar, Heart } from 'lucide-react';

const HomeN = () => {
  const features = [
    {
      icon: PenTool,
      title: 'Digital Journaling',
      description: 'Write, organize, and reflect on your thoughts with our intuitive digital journal platform.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description: 'Your thoughts are safe with end-to-end encryption and privacy-first design.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Calendar,
      title: 'Smart Organization',
      description: 'Find your entries instantly with powerful search, tags, and mood tracking.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Heart,
      title: 'Personal Growth',
      description: 'Track your journey, identify patterns, and celebrate your progress over time.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Writer & Blogger',
      content: 'This journal app has transformed how I capture and reflect on my daily experiences. The interface is beautiful and intuitive.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      content: 'Perfect for tracking my thoughts and goals. The search functionality makes it easy to find old entries and see my growth.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Emma Davis',
      role: 'Professional',
      content: 'I love how secure and private this platform is. Finally, a place where I can write freely without worrying about privacy.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Writers' },
    { number: '2M+', label: 'Journal Entries' },
    { number: '50+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
            Your Digital
            <span className="text-blue-600 block">Journal Companion</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Capture your thoughts, track your moods, and reflect on your journey with our beautiful, 
            secure, and intuitive journaling platform designed for modern life.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <BookOpen className="h-5 w-5" />
            <span>Start Writing Free</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-slate-200 hover:border-slate-300"
          >
            <span>Learn More</span>
          </Link>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-6 text-left">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-blue-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Our Journal?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built with care for writers, thinkers, and anyone who values their personal growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-4`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Join Thousands of Writers</h2>
          <p className="text-blue-100 text-lg">
            People around the world trust us with their most personal thoughts and experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Users Say</h2>
          <p className="text-lg text-slate-600">
            Real feedback from people who've made journaling a part of their daily routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Join thousands of writers who have discovered the power of digital journaling. 
          Your thoughts deserve a beautiful home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/signup"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            <span>Create Free Account</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            <span>Learn More</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeN;