import React, { useState } from 'react';
import { Search, Trash2, AlertTriangle, X, Hash, List } from 'lucide-react';

const DeleteEntry = () => {
  const [searchMode, setSearchMode] = useState('text'); // 'text', 'id', 'all'
  const [searchTerm, setSearchTerm] = useState('');
  const [entryId, setEntryId] = useState('');
  const [selectedEntries, setSelectedEntries] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const sampleEntries = [
    {
      id: 1,
      title: 'Morning Reflections',
      content: 'Started the day with meditation and coffee. Feeling grateful for the peaceful morning...',
      date: '2025-01-15',
      mood: 'Happy',
      tags: ['meditation', 'gratitude']
    },
    {
      id: 2,
      title: 'Work Progress',
      content: 'Made significant progress on the new project today. The team collaboration was excellent...',
      date: '2025-01-14',
      mood: 'Productive',
      tags: ['work', 'progress']
    },
    {
      id: 3,
      title: 'Evening Walk',
      content: 'Took a long walk in the park. The sunset was beautiful and it helped clear my mind...',
      date: '2025-01-13',
      mood: 'Peaceful',
      tags: ['nature', 'exercise']
    },
    {
      id: 4,
      title: 'Old Draft Entry',
      content: 'This is an old draft that I never finished writing...',
      date: '2025-01-10',
      mood: 'Neutral',
      tags: ['draft']
    }
  ];

  const getFilteredEntries = () => {
    if (searchMode === 'all') {
      return sampleEntries;
    }
    
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

  const toggleEntrySelection = (entryId) => {
    setSelectedEntries(prev => {
      if (prev.includes(entryId)) {
        return prev.filter(id => id !== entryId);
      } else {
        return [...prev, entryId];
      }
    });
  };

  const handleDeleteSelected = () => {
    if (selectedEntries.length === 0) return;
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    console.log('Deleting entries:', selectedEntries);
    alert(`Successfully deleted ${selectedEntries.length} ${selectedEntries.length === 1 ? 'entry' : 'entries'}!`);
    setSelectedEntries([]);
    setShowConfirmModal(false);
  };

  const getSelectedEntriesData = () => {
    return sampleEntries.filter(entry => selectedEntries.includes(entry.id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Delete Entry</h1>
        <p className="text-slate-600 mb-8">Select entries to remove from your journal</p>

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
            <button
              onClick={() => {
                setSearchMode('all');
                setSearchTerm('');
                setEntryId('');
              }}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                searchMode === 'all'
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              <List className="h-4 w-4" />
              <span>View All Entries</span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        {searchMode !== 'all' && (
          <div className="relative mb-6">
            {searchMode === 'text' ? (
              <>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search entries to delete..."
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
                  placeholder="Enter entry ID to delete..."
                  value={entryId}
                  onChange={(e) => setEntryId(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </>
            )}
          </div>
        )}

        {searchMode === 'all' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-700">
              Showing all entries. Select the ones you want to delete.
            </p>
          </div>
        )}

        {/* Warning Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-amber-800">Be careful!</h3>
              <p className="text-sm text-amber-700 mt-1">
                Deleted entries cannot be recovered. Please make sure you want to permanently remove these entries.
              </p>
            </div>
          </div>
        </div>

        {/* Selection Actions */}
        {selectedEntries.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-800">
                  {selectedEntries.length} {selectedEntries.length === 1 ? 'entry' : 'entries'} selected for deletion
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedEntries([])}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Clear Selection
                </button>
                <button
                  onClick={handleDeleteSelected}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete Selected</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Entry List */}
      <div className="space-y-3">
        {filteredEntries.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
            <p className="text-slate-600">
              {searchMode === 'id' && entryId 
                ? `No entry found with ID: ${entryId}` 
                : 'No entries found matching your search'
              }
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredEntries.map((entry) => {
              const isSelected = selectedEntries.includes(entry.id);
              return (
                <div
                  key={entry.id}
                  className={`bg-white rounded-xl shadow-sm border transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-slate-200 hover:shadow-md hover:border-slate-300'
                  }`}
                  onClick={() => toggleEntrySelection(entry.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0 mt-1">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              e.stopPropagation();
                              toggleEntrySelection(entry.id);
                            }}
                            className="h-4 w-4 text-red-600 focus:ring-red-500 border-slate-300 rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                              ID: {entry.id}
                            </span>
                          </div>
                          <h3 className={`text-lg font-semibold mb-2 ${isSelected ? 'text-red-800' : 'text-slate-800'}`}>
                            {entry.title}
                          </h3>
                          <p className={`mb-3 ${isSelected ? 'text-red-700' : 'text-slate-600'}`}>
                            {entry.content}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                              <span>{new Date(entry.date).toLocaleDateString()}</span>
                              <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                                {entry.mood}
                              </span>
                            </div>
                            <div className="flex space-x-1">
                              {entry.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-red-100 rounded-full p-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Confirm Deletion</h3>
                <p className="text-slate-600 mb-4">
                  Are you sure you want to delete {selectedEntries.length} {selectedEntries.length === 1 ? 'entry' : 'entries'}? 
                  This action cannot be undone.
                </p>
                
                <div className="mb-4 max-h-32 overflow-y-auto">
                  <p className="text-sm font-medium text-slate-700 mb-2">Entries to be deleted:</p>
                  <ul className="space-y-1">
                    {getSelectedEntriesData().map((entry) => (
                      <li key={entry.id} className="text-sm text-slate-600">
                        • {entry.title} ({new Date(entry.date).toLocaleDateString()})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                <span>Delete Forever</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteEntry;