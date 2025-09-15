import { useEffect, useRef } from "react";

function Create() {

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const titleContent = Object.fromEntries(formData.entries());
        console.log(titleContent);

        const title = titleContent.title;
        const content = titleContent.content;
        console.log(title, content);

        const token = localStorage.getItem("token");
        console.log("local storage token ", token);

        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${token}`);

        const body = JSON.stringify({ title, content });   // JS object -> JSON String

        try {
            const response = await fetch("http://localhost:8080/journal", {
                method: "POST",
                headers: headers,
                body: body
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Journal entry created successfully", data);
                formRef.current.reset();
            }
            else {
                const errmsg = await response.text();
                console.log("Failed to create journal entry", errmsg);
            }
        } catch (error) {
            console.error("Network error while creating journal entry:", error);
        }

    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Create New Journal Entry</h2>
            <form ref={formRef} className="space-y-4" action="">
                <div>
                    <label className="block text-sm font-bold text-gray-800">Title</label>
                    <input name="title" type="text" placeholder="Enter Title" className="mt-1 block w-full border  rounded-md border-emerald-800 p-2" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-800">Content</label>
                    <textarea name="content" placeholder="Describe your Day" className="mt-1 block w-full border border-emerald-800 rounded-md p-2" rows="5"></textarea>
                </div>
                <button onClick={handleSubmit} type="submit" className="bg-blue-500 
                text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Entry</button>
            </form>
        </div>
    );
}

export default Create;