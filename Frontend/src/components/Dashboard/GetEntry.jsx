import { useState, React, useEffect } from 'react';
import { Search, Calendar, BookOpen, Filter, Hash, List } from 'lucide-react';
import { useRef } from 'react';

const GetEntry = () => {
    const [searchMode, setSearchMode] = useState('id'); //  'id', 'all'
    const [idActive, setIdActive] = useState(false);
    const [allActive, setAllActive] = useState(false);


    const [allData, setAllData] = useState(null);
    function handleAllSubmit() {
        setIdActive(false);
        setAllActive(true);
        const headers = new Headers();
        const token = localStorage.getItem("token");
        console.log("local storage token ", token);
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${token}`);
        const response = fetch("http://localhost:8080/journal", {
            method: "GET",
            headers: headers,
        })
        response.then(res => {
            console.log("inside response ");
            console.log(res);

            return res.json()
        })
            .then(data => {
                setAllData(data)
                console.log(data);
                return data;
            })
            .catch(err => console.error("Error fetching journal entries:", err));
    }

    const [idData, setIdData] = useState(null);
    const formRef = useRef(null);
    const handleIdSubmit = async (e) => {

        e.preventDefault()
        const formData = new FormData(formRef.current);
        const formContent = Object.fromEntries(formData.entries());
        console.log("form content ", formContent);
        const id = formContent.id;
        setAllActive(false);
        setIdActive(true);

        const headers = new Headers();
        const token = localStorage.getItem("token");
        console.log("local storage token ", token);
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${token}`);
        try {


            const response = await fetch("http://localhost:8080/journal/id/" + id, {
                method: "GET",
                headers: headers,
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                setIdData(data);
            } else {
                const err = await response.json();
                console.log("Error while fetching entry : ", err);
            }
        } catch (error) {
            console.log(error, "occured");

        }
        formRef.current.reset();
    }


    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Get Entry</h1>
                <p className="text-slate-600 mb-8">Search and browse through your journal entries</p>

                {/* Search Mode Selection */}
                <div className="mb-6">
                    <div className="flex flex-col gap-2">
                        <form action="" onSubmit={handleIdSubmit} ref={formRef}>
                            <button
                                onClick={() => {
                                    setSearchMode('id');
                                }}
                                className={` w-50 inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
                                active:scale-95 transform duration-100 ${searchMode === 'id'
                                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                        : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                                    }`}
                            >
                                <Hash className="h-4 w-4" />
                                <span>Search by ID</span>
                            </button>

                            <input
                                type="text"
                                id="id"
                                name="id"
                                placeholder="Enter entry ID..."
                                className=" ml-4 pl-10 pr-4 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />

                        </form>
                        <button
                            onClick={() => {
                                setSearchMode('all');
                                handleAllSubmit();
                            }}
                            className={`w-50 flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
                                active:scale-95 transform duration-100 ${searchMode === 'all'
                                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                    : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                                }`}
                        >
                            <List className="h-4 w-4" />
                            <span>View All Entries</span>
                        </button>
                    </div>
                </div>

            </div>
            <div>
                {allActive && !idActive ?
                    (
                        /* Find all */
                        <div className="space-y-4">
                            {allData != null && allData.length > 0 ? (
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-slate-800">
                                        Entries Found - {allData.length}
                                    </h2>
                                </div>) : (
                                <div>
                                    <h2 className="text-xl font-semibold text-slate-800">
                                        Fetching data ...
                                    </h2>
                                </div>
                            )}
                            <div className='space-y-4'>
                                {allData != null && allData.length>0 ?
                                    (allData.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).map((entry) => (
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
                                                <div className="flex flex-col items-center space-x-4 text-sm text-slate-500">
                                                    <span>{new Date(entry.date).toLocaleDateString()}</span>
                                                    {entry.mood ? (
                                                        <span className='mt-2 py-1  px-4 border border-slate-300 rounded-lg bg-slate-100'>{entry.mood}</span>) :
                                                        <span></span>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))) : (
                                        <div className='text-3xl font-mono text-slate-700'>No Entries yet</div>
                                    )}
                            </div>
                        </div>
                    ) : (
                        <div className='space-y-4'>
                            <div className="relative col-span-2">
                            </div>
                            <div className='space-y-4'>
                                {idData!=null ? (
                                    <div key={idData.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                                        ID: {idData.id}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-slate-800 mb-2">{idData.title}</h3>
                                                <p className="text-slate-600 mb-3">{idData.content}</p>
                                            </div>
                                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                                                <span>{new Date(idData.date).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='text-2xl font-mono text-slate-700'>Enter id and Search</div>
                                )}
                            </div>
                        </div>
                    )}
            </div>
        </div>

    );
};

export default GetEntry;