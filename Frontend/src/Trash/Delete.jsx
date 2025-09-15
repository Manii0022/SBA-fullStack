import { useRef } from "react";

function Delete() {

    const formRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const formContent = Object.fromEntries(formData.entries());
        console.log("form content : ", formContent);

        const token = localStorage.getItem("token");
        const id = formContent.id;

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${token}`);

        try {
            console.log("inside try catch ");
            
            const url = "http://localhost:8080/journal/" + id;
            const response = await fetch(url, {
                method: "DELETE",
                headers: headers,
            })
            if (response.ok) {
                console.log("deleted successfully : ");
            }
            else {
                const err = await response.json();
                console.log("Error while deleting entry : ", err);
            }
        }
        catch (error) {
            console.log("Network error while deleting : ", error);
        }

    }


    return (
        <div className="p-4">
            <form a ref={formRef} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-800">Entry ID</label>
                    <input type="text" name="id" className="mt-1 block w-full border border-black rounded-md p-2" placeholder="Enter ID to delete " required />
                </div>
                <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Delete     Entry</button>

            </form>
        </div>
    );
}

export default Delete;