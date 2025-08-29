import { useRef } from "react";

function Update() {

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(formRef.current);
        const formContent = Object.fromEntries(formData.entries());
        console.log("form content ", formContent);

        const id = formContent.id;
        const title = formContent.title;
        const content = formContent.content;
        const token = localStorage.getItem("token")

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${token}`);

        const body = JSON.stringify({ title, content })

        try {
            console.log("inside try catch");

            const url = "http://localhost:8080/journal/" + id;
            const response = await fetch(url, {
                method: "PUT",
                headers: headers,
                body: body
            });
            if (response.ok) {
                console.log(await response.json());
            }
            else {
                const err = await response.json();
                console.log("Error while fetching entry : ", err);
            }
        }
        catch (error) {
            console.log("Network error while fetching : ", error);
        }
    }



    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Update Journal Entry</h2>
            <form ref={formRef} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-800">Entry ID</label>
                    <input type="text" name="id" className="mt-1 block w-full border border-black rounded-md p-2" placeholder="Enter Entry ID" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-800">Title</label>
                    <input type="text" name="title" className="mt-1 block w-full border border-black rounded-md p-2" placeholder="Enter Title" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-800">Content</label>
                    <textarea name="content" className="mt-1 block w-full border border-black rounded-md p-2" rows="4" placeholder="Enter Content"></textarea>
                </div>
                    <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Update Entry</button>
            </form>
        </div>
    );
}

export default Update;