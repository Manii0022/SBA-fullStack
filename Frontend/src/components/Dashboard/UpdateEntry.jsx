import React, { useState } from 'react';
import { Save, Search, Edit, Calendar, Tag, Smile, Hash } from 'lucide-react';

const UpdateEntry = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [searchMode, setSearchMode] = useState('text'); // 'text' or 'id'
  const [searchTerm, setSearchTerm] = useState('');
  const [entryId, setEntryId] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
    mood: '',
    tags: '',
  });

  const sampleEntries = [
    {
      id: 1,
      title: 'Morning Reflections',
      content: 'Started the day with meditation and coffee. Feeling grateful for the peaceful morning...',
      date: '2025-01-15',
      mood: 'Happy',
      tags: 'meditation, gratitude'
    },
    {
      id: 2,
      title: 'Work Progress',
      content: 'Made significant progress on the new project today. The team collaboration was excellent...',
      date: '2025-01-14',
      mood: 'Productive',
      tags: 'work, progress'
    },
    {
      id: 3,
      title: 'Evening Walk',
      content: 'Took a long walk in the park. The sunset was beautiful and it helped clear my mind...',
      date: '2025-01-13',
      mood: 'Peaceful',
      tags: 'nature, exercise'
    }
  ];

  const getFilteredEntries = () => {
    if (searchMode === 'id') {
      if (!entryId) return [];
      return sampleEntries.filter(entry => entry.id.toString() === entryId);
    }
    
    // Text search mode
    return sampleEntries.filter(entry =>
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredEntries = getFilteredEntries();

  const selectEntry = (entry) => {
    setSelectedEntry(entry);
    setFormData({
      title: entry.title,
      content: entry.content,
      date: entry.date,
      mood: entry.mood,
      tags: entry.tags,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updating entry:', selectedEntry.id, formData);
    alert('Entry updated successfully!');
  };

  const moods = [
    'Happy', 'Grateful', 'Excited', 'Peaceful', 'Productive', 
    'Reflective', 'Anxious', 'Sad', 'Frustrated', 'Hopeful'
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Update Entry</h1>
        <p className="text-slate-600 mb-8">Select an entry to edit and make your changes</p>

        {!selectedEntry ? (
          <div className="space-y-6">
            {/* Search Mode Selection */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setSearchMode('text');
                    setEntryId('');
                  }}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    searchMode === 'text'
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Search className="h-4 w-4" />
                  <span>Search by Text</span>
                </button>
                <button
                  onClick={() => {
                    setSearchMode('id');
                    setSearchTerm('');
                  }}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    searchMode === 'id'
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Hash className="h-4 w-4" />
                  <span>Search by ID</span>
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              {searchMode === 'text' ? (
                <>
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search entries to edit..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </>
              ) : (
                <>
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="number"
                    placeholder="Enter entry ID to edit..."
                    value={entryId}
                    onChange={(e) => setEntryId(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </>
              )}
            </div>

            {/* Entry List */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-slate-800">Select an entry to edit:</h3>
              {filteredEntries.length === 0 ? (
                <p className="text-slate-500 py-8 text-center">
                  {searchMode === 'id' && entryId 
                    ? `No entry found with ID: ${entryId}` 
                    : 'No entries found matching your search'
                  }
                </p>
              ) : (
                <div className="space-y-3">
                  {filteredEntries.map((entry) => (
                    <div
                      key={entry.id}
                      onClick={() => selectEntry(entry)}
                      className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                              ID: {entry.id}
                            </span>
                          </div>
                          <h4 className="font-medium text-slate-800 group-hover:text-blue-600">
                            {entry.title}
                          </h4>
                          <p className="text-sm text-slate-600 mt-1 truncate">
                            {entry.content}
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                            <span>{new Date(entry.date).toLocaleDateString()}</span>
                            <span>{entry.mood}</span>
                          </div>
                        </div>
                        <Edit className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Selected Entry Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                Editing entry: <span className="font-medium">{selectedEntry.title}</span>
              </p>
              <button
                onClick={() => {
                  setSelectedEntry(null);
                  setFormData({ title: '', content: '', date: '', mood: '', tags: '' });
                }}
                className="text-sm text-blue-600 hover:text-blue-800 mt-1"
              >
                ← Back to entry list
              </button>
            </div>

            {/* Edit Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  required
                />
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-slate-700 mb-2">
                  <Tag className="inline h-4 w-4 mr-1" />
                  Tags (optional)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Enter tags separated by commas..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEntry(null);
                    setFormData({ title: '', content: '', date: '', mood: '', tags: '' });
                  }}
                  className="px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>Update Entry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateEntry;