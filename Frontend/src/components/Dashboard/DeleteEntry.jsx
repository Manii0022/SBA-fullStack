import { useRef, useState } from 'react';
import { AlertTriangle, X, Hash, List } from 'lucide-react';

const DeleteEntry = () => {

  const formRef = useRef(null);
  const [deleteMode, setDeleteMode] = useState(''); // 'id', 'all'
  const [deletedById, setDeletedById] = useState(false);
  // with async-await
  const handleDeleteById = async (e) => {
    e.preventDefault();
    setToShow(false);
    console.log("form submitted");

    const formData = new FormData(formRef.current)
    const actualFormData = Object.fromEntries(formData.entries());
    const formId = actualFormData.id;
    console.log("formId is : ", formId);
    console.log("form data : ", formData);



    const headers = new Headers();
    const token = localStorage.getItem("token");
    headers.append("content-type", "application/json")
    headers.append("Authorization", `Bearer ${token}`)
    try {
      const response = await fetch("http://localhost:8080/journal/" + formId, {
        method: "DELETE",
        headers: headers
      })
      if (response.ok) {
        setDeletedById(true);
        console.log("deleted successfully");
      } else {
        setDeletedById(false);
        const error = await response.json();
        console.log(error);
      }
    } catch (err) {
      console.log("Network error while deleting : ", err);
    }

    formRef.current.reset();
    // setEntryId(id)
    // console.log("data / id : ", id)
  }

  const [allData, setAllData] = useState(null);
  const [toShow, setToShow] = useState(false)
  // without async-await
  const handleAllSubmit = () => {
    setToShow(true);
    const headers = new Headers();
    const token = localStorage.getItem("token");
    console.log("local storage token ", token);
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);
    try {
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
    } catch (err) {
      console.log("Network error while fetching : ", err);
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Delete Entry</h1>
        <p className="text-slate-600 mb-8">Select entries to remove from your journal</p>

        {/* Search by id*/}
        <div className="mb-4">
          <div className="flex flex-col gap-2">
            <form action="" onSubmit={handleDeleteById} ref={formRef}>
              <button
                onClick={() => {
                  setDeleteMode('id');
                }}
                className={` w-50 inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
                            active:scale-95 transform duration-100 ${deleteMode === 'id'
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                  }`}
              >
                <Hash className="h-4 w-4" />
                <span>Delete by ID</span>
              </button>

              <input
                type="text"
                id="id"
                name="id"
                placeholder="Enter entry ID to delete..."
                className=" ml-4 pl-10 pr-4 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </form>

            {/* view all entries  */}
            <button
              onClick={() => {
                setDeleteMode('all');
                handleAllSubmit();
              }}
              className={`w-50 flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
                                          active:scale-95 transform duration-100 ${deleteMode === 'all'
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-100'
                }`}
            >
              <List className="h-4 w-4" />
              <span>View All Entries</span>
            </button>
          </div>
        </div>



        {deleteMode === 'all' && (
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
      </div>

      {/* Entry List */}
      <div className="space-y-3">

        {deleteMode === 'id' && deletedById ? (
          <div className=' space-y-4 text-3xl text-slate-500 font-mono flex flex-col items-center 
          border-slate-400 p-4 rounded-xl bg-slate-100 hover:bg-slate-250'>
            <span className=' '>
              Gone ones are always in the hearts.
            </span>
            <span>
              Entry deleted successfully
            </span>
            <div>
              <span>

              </span>
            </div>
          </div>
        ) : (
          <div>
          </div>
        )}



        <div className="space-y-3">
          {toShow ? (
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-800">
                {allData
                  ? `Entries Found - ${allData.length}`
                  : ``
                }
              </h2>
            </div>
          ) : (
            <div></div>
          )}
          <div className='space-y-4'>
            {allData && toShow ? (
              allData.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).map((entry) => (
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
              <div></div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeleteEntry;