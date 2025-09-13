import React, { useState } from 'react';
import { Search, Calendar, BookOpen, Filter, Hash, List } from 'lucide-react';

const GetEntry = () => {
    const [searchMode, setSearchMode] = useState('text'); // 'text', 'id', 'all'
    const [searchTerm, setSearchTerm] = useState('');
    const [entryId, setEntryId] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedMood, setSelectedMood] = useState('');

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
        return sampleEntries.filter(entry => {
            const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                entry.content.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDate = !selectedDate || entry.date === selectedDate;
            const matchesMood = !selectedMood || entry.mood === selectedMood;

            return matchesSearch && matchesDate && matchesMood;
        });
    };

    const filteredEntries = getFilteredEntries().filter(entry => {
        const matchesDate = !selectedDate || entry.date === selectedDate;
        const matchesMood = !selectedMood || entry.mood === selectedMood;
        return matchesDate && matchesMood;
    });

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Get Entry</h1>
                <p className="text-slate-600 mb-8">Search and browse through your journal entries</p>

                {/* Search Mode Selection */}
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => {
                                setSearchMode('text');
                                setEntryId('');
                            }}
                            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${searchMode === 'text'
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
                            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${searchMode === 'id'
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
                            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${searchMode === 'all'
                                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                                }`}
                        >
                            <List className="h-4 w-4" />
                            <span>View All Entries</span>
                        </button>
                    </div>
                </div>

                {/* Search and Filters */}
                {searchMode !== 'all' && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        {searchMode === 'text' ? (
                            <div className="relative col-span-2">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search entries by title or content..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        ) : (
                            <div className="relative col-span-2">
                                <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="number"
                                    placeholder="Enter entry ID..."
                                    value={entryId}
                                    onChange={(e) => setEntryId(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        )}

                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <select
                                value={selectedMood}
                                onChange={(e) => setSelectedMood(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                            >
                                <option value="">All Moods</option>
                                <option value="Happy">Happy</option>
                                <option value="Productive">Productive</option>
                                <option value="Peaceful">Peaceful</option>
                                <option value="Reflective">Reflective</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>

            {/* Results */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-slate-800">
                        {searchMode === 'all'
                            ? `All Entries (${filteredEntries.length})`
                            : `${filteredEntries.length} ${filteredEntries.length === 1 ? 'Entry' : 'Entries'} Found`
                        }
                    </h2>
                </div>

                {filteredEntries.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
                        <BookOpen className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600">
                            {searchMode === 'id' && entryId
                                ? `No entry found with ID: ${entryId}`
                                : 'No entries match your search criteria'
                            }
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredEntries.map((entry) => (
                            <div key={entry.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                                ID: {entry.id}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{entry.title}</h3>
                                        <p className="text-slate-600 mb-3">{entry.content}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                                        <span>{new Date(entry.date).toLocaleDateString()}</span>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
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
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetEntry;