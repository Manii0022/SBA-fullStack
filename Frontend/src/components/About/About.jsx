import React from 'react';
import { BookOpen, Heart, Shield, Users, Target, Lightbulb, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Writing',
      description: 'We believe everyone has a story worth telling and thoughts worth preserving.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your personal thoughts deserve the highest level of security and privacy.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building tools that bring people closer to their authentic selves.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly improving and evolving to serve our users better.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Founder & CEO',
      bio: 'Passionate writer and tech entrepreneur with 10+ years in digital product development.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Sarah Kim',
      role: 'Head of Design',
      bio: 'UX designer focused on creating beautiful, intuitive experiences for writers.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack engineer passionate about building secure, scalable applications.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Started with a simple idea to digitize journaling' },
    { year: '2021', event: 'First 1,000 Users', description: 'Reached our first major user milestone' },
    { year: '2022', event: 'Mobile App Launch', description: 'Expanded to iOS and Android platforms' },
    { year: '2023', event: '50,000 Users', description: 'Growing community of passionate writers' },
    { year: '2024', event: 'AI Features', description: 'Introduced smart insights and writing prompts' },
    { year: '2025', event: 'Global Expansion', description: 'Now serving users in over 50 countries' }
  ];

  const features = [
    { icon: Target, label: 'Empower Self-Reflection' },
    { icon: Shield, label: 'Protect Privacy' },
    { icon: Heart, label: 'Foster Growth' },
    { icon: Globe, label: 'Connect Communities' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
          <BookOpen className="h-10 w-10 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">About Our Story</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We're on a mission to help people capture, reflect on, and learn from their life experiences 
          through the power of digital journaling.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe that everyone has valuable thoughts, experiences, and insights worth preserving. 
              Our platform provides a safe, beautiful, and intuitive space for people to document their 
              journey, reflect on their growth, and connect with their authentic selves.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              In a world full of distractions, we're creating a sanctuary for mindful reflection and 
              personal growth through the timeless practice of journaling, enhanced by modern technology.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold text-slate-800">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The principles that guide everything we do and every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${value.bgColor} mb-4`}>
                  <Icon className={`h-6 w-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate individuals dedicated to creating the best journaling experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-slate-800 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Journey</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From a simple idea to a platform trusted by thousands of writers worldwide.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-sm font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-800">{milestone.event}</h3>
                  </div>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
          <p className="text-blue-100 text-lg">
            The impact we've made together with our amazing community.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-blue-100 text-sm">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2M+</div>
            <div className="text-blue-100 text-sm">Entries Written</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-blue-100 text-sm">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-blue-100 text-sm">Uptime</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;