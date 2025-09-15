import React, { useState } from 'react';
import { Save, Calendar, Tag, Smile } from 'lucide-react';
import { useRef } from 'react';
import { BookOpenCheck } from 'lucide-react';

const CreateEntry = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit"
    }),
    mood: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [entryCreated, setEntryCreated] = useState(false);

  const formRef = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current)
    const actualFormData = Object.fromEntries(formData.entries())
    console.log(actualFormData);

    const title = actualFormData.title;
    const content = actualFormData.content;
    const mood = actualFormData.mood;

    const token = localStorage.getItem("token");
    console.log("local storage token : ", token);

    const headers = new Headers();
    headers.append("Content-type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    const body = JSON.stringify({ title, content, mood })
    try {
      const response = await fetch("http://localhost:8080/journal", {
        method: "POST",
        headers: headers,
        body: body
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Journal entry created successfully", data);
        setEntryCreated(true);
      }
      else {
        const errmsg = await response.text();
        console.log("Failed to create journal entry", errmsg);
      }
    } catch (error) {
      console.error("Network error while creating journal entry:", error);
    }




    // Reset form
    setFormData({
      title: '',
      content: '',
      date: new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit"
      }),
      mood: '',
    });
  };

  const moods = [
    'Happy', 'Excited', 'Peaceful', 'Productive',
    'Anxious', 'Sad', 'Frustrated', 'Angry'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Create New Entry</h1>
        <p className="text-slate-600 mb-8">Capture your thoughts and experiences</p>

        <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter a title for your entry..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Date and Mood Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=''>
              <div className="block text-sm font-medium text-slate-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Today's Date
              </div>
              <div className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 
              focus:ring-blue-500 focus:border-transparent"              >
                {formData.date}
              </div>
            </div>

            <div>
              <label htmlFor="mood" className="block text-sm font-medium text-slate-700 mb-2">
                <Smile className="inline h-4 w-4 mr-1" />
                Mood
              </label>
              <select
                id="mood"
                name="mood"
                value={formData.mood}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your mood...</option>
                {moods.map((mood) => (
                  <option key={mood} value={mood}>{mood}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-2">
              Entry Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={12}
              placeholder="Write your thoughts, experiences, or reflections here..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-slate-200">
            <div className='flex-1  '>
              {entryCreated ? (
                <div className=' flex justify-center px-6 py-3  '>
                  <BookOpenCheck className='mr-4' />
                  <span>Entry Created successfully</span>
                </div>
              ) : (
                <div>

                </div>
              )}
            </div>
            <button
              type="submit"
              className=" inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-800 
              text-white rounded-lg font-medium transition-colors active:scale-95  transform duration-150"
            >
              <Save className="h-4 w-4" />
              <span>Create Entry</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEntry;