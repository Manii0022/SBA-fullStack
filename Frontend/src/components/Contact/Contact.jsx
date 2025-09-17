import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, HelpCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'manishlodhi0224@gmail.com',
      description: 'Send us an email anytime',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 8178053840',
      description: 'Mon-Fri from 8am to 6pm',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Developers Plaza',
      description: 'India, 201014',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const faqItems = [
    {
      question: 'How secure is my journal data?',
      answer: 'We believe in privacy and use industry-standard security measures to protect your journal entries. Your data is never shared with third parties and remains completely private.'
    },
    {
      question: 'Can I share my journal entries with others?',
      answer: 'Your journal is completely private by default. However, you can choose to export specific entries and share them manually if you wish. We never automatically share your content.'
    },
    {
      question: 'How much does the journal app cost?',
      answer: 'Journaling is something that everyone should and must do. Keeping that in mind, our App is completely free to use for all.'
    },
    {
      question: 'Can I export my journal entries?',
      answer: 'Yes! You can export your entries in various formats including PDF, Word, and plain text at any time from your account settings. Your data belongs to you.'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, we have mobile apps for both iOS and Android. You can download them from the App Store or Google Play Store and sync seamlessly with your web account.'
    },
    {
      question: 'What happens if I forget my password?',
      answer: 'You can reset your password using the "Forgot Password" link on the login page. We\'ll send you a secure reset link via email to regain access to your journal.'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Message Sent!</h1>
          <p className="text-lg text-slate-600 mb-6">
            Thank you for reaching out. We've received your message and will get back to you within 24 hours.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-700">
              We typically respond to inquiries within 2-4 hours during business hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Get in Touch</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Have questions, feedback, or need help with your journaling journey? We're here to assist you. 
          Reach out to us anytime.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((info) => {
          const Icon = info.icon;
          return (
            <div key={info.title} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${info.bgColor} mb-4`}>
                <Icon className={`h-6 w-6 ${info.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{info.title}</h3>
              <p className="text-slate-800 font-medium mb-1">{info.details}</p>
              <p className="text-sm text-slate-600">{info.description}</p>
            </div>
          );
        })}
      </section>

      {/* Contact Form and FAQ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
                <option value="privacy">Privacy Concern</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Tell us how we can help you with your journaling experience..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-slate-600 mb-8">
              Quick answers to common questions about our journal app. Can't find what you're looking for? Send us a message!
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">{item.question}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Response Time Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Response Times</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• General inquiries: Within 24 hours</li>
                  <li>• Technical support: Within 4 hours</li>
                  <li>• Urgent issues: Within 1 hour</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;