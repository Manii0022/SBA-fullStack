import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Plus, Search, Edit, Trash2, Calendar, BookOpen, TrendingUp } from 'lucide-react';

const Dashboard = () => {

  const utilityCards = [
    {
      title: 'Get Entry',
      description: 'Search and view your journal entries',
      icon: Search,
      path: 'get-entry',
      color: 'bg-blue-500 hover:bg-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      title: 'Create Entry',
      description: 'Write a new journal entry',
      icon: Plus,
      path: 'create-entry',
      color: 'bg-green-500 hover:bg-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      title: 'Update Entry',
      description: 'Edit existing journal entries',
      icon: Edit,
      path: 'update-entry',
      color: 'bg-amber-500 hover:bg-amber-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
    },
    {
      title: 'Delete Entry',
      description: 'Remove unwanted entries',
      icon: Trash2,
      path: 'delete-entry',
      color: 'bg-red-500 hover:bg-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
    },
  ];

  const stats = [
    { label: 'Total Entries', value: '142', icon: BookOpen, color: 'text-blue-600' },
    { label: 'This Month', value: '23', icon: Calendar, color: 'text-green-600' },
    { label: 'Writing Streak', value: '7 days', icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Welcome to Your Journal</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Capture your thoughts, memories, and experiences. Your personal space for reflection and growth.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-800 mt-2">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Utility Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {utilityCards.map((card) => {
          const Icon = card.icon;
          return (
            <NavLink
              key={card.title}
              to={card.path}
              className="group block bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${card.bgColor} mb-4`}>
                  <Icon className={`h-6 w-6 ${card.textColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-slate-900">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-700">
                  {card.description}
                </p>
              </div>
              <div className={`h-1 ${card.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200`}></div>
            </NavLink>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <NavLink
            to="/create-entry"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>New Entry</span>
          </NavLink>
          <NavLink
            to="/get-entry"
            className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Search className="h-4 w-4" />
            <span>Browse Entries</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;