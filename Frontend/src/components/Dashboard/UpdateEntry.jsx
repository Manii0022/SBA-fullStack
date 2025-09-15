import React, { useState } from 'react';
import { Save, Search, Edit, Calendar, Tag, Smile, Hash, BookOpenCheck } from 'lucide-react';
import { useRef } from 'react';


const UpdateEntry = () => {

  const [formData, setFormData] = useState({
    id: '',
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

  const [entryUpdated, setEntryUpdated] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current)
    const actualFormData = Object.fromEntries(formData.entries());
    console.log("update data info : ", actualFormData);
    const id = actualFormData.id;

    const body = JSON.stringify({
      id: actualFormData.id,
      title: actualFormData.title,
      content: actualFormData.content,
      mood: actualFormData.mood
    })

    const token = localStorage.getItem("token");
    console.log("localStorage token : ", token);

    const headers = new Headers();
    headers.append("content-type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    try {
      const response = await fetch("http://localhost:8080/journal/" + id, {
        method: "PUT",
        headers: headers,
        body: body
      });
      if (response.ok) {
        const data = await response.json();
        console.log("updated : ", data);
        setEntryUpdated(true);
      }
      else {
        const error = await response.json();
        console.log("Error while updating : ", error);
      }
    } catch (err) {
      console.log("Network error while fetching : ", err);
    }

  };

  const moods = [
    'Happy', 'Excited', 'Peaceful', 'Productive',
    'Anxious', 'Sad', 'Frustrated', 'Angry'
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Update Entry</h1>
        <p className="text-slate-600 mb-8">Select an entry to edit and make your changes</p>

        <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">

          {/* Entry id  */}
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-slate-700 mb-2">
              Existing entry id
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              placeholder="Enter the existing entry ID..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
              Updated Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter a new title for your entry..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Date and Mood Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=''>
              <div className="block text-sm font-medium text-slate-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Today's Date
              </div>
              <div className="w-full px-4 py-3 border border-slate-300 rounded-lg ">
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
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2  focus:ring-blue-500 focus:border-transparent"
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
              Updated Entry Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={12}
              placeholder="Mistakes are a part of learning, write your updated and fresh thoughts, experiences, or reflections here..."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-slate-200">
            <div className='flex-1  '>
              {entryUpdated ? (
                <div className=' flex justify-center px-6 py-3  '>
                  <BookOpenCheck className='mr-4' />
                  <span>successfully Updated Entry</span>
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
              <span>Update Entry</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEntry;