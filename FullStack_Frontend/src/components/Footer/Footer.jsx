import React from "react";
import { useState } from "react";
function Footer() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "Question 1", a: "Answer for question 1 goes here." },
        { q: "Question 2", a: "Answer for question 2 goes here." },
        { q: "Question 3", a: "Answer for question 3 goes here." },
        { q: "Question 4", a: "Answer for question 4 goes here." },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>

            <footer className="bg-purple-400 flex-col">
                {/* <div>
                    FAQs here
                    <ul className="space-y-2">
                        <li>Question 1</li>
                        <li>Question 1</li>
                        <li>Question 1</li>
                        <li>Question 1</li>
                    </ul>

                </div> */}
                <h2 className="text-2xl font-bold mb-4">FAQs</h2>
                <ul className="space-y-2">
                    {faqs.map((item, index) => (
                        <li key={index} className="border rounded-lg">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-3 font-semibold flex justify-between items-center"
                            >
                                {item.q}  
                                <span>{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <p className="p-3 text-gray-600">{item.a}</p>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="flex justify-around">
                    <div>
                        Resources
                        <ol className="list-disc text-2xl">
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                        </ol>

                    </div>

                    <div>
                        Navigate
                        <ol className="list-disc text-2xl">
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                        </ol>
                    </div>

                    <div>
                        Social
                        <ol className=" list-disc list-inside text-2xl flex flex-col justify-center align-middle">
                            <li>Mobile</li>
                            <li>Github</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>Email</li>
                        </ol>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer;