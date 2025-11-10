import { useState } from "react";
import { FaCheckCircle, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
    const [result, setResult] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "0c5306cd-9bd2-45b4-8f5a-2358706426a8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        if (data.success) {
            setResult("Success!");
            setShowSuccess(true);
            event.target.reset();
            setTimeout(() => setShowSuccess(false), 3500);
        } else {
            setResult("Error! Please try again.");
        }
    };

    return (
        <div id="contact" className="bg-[#fff8eb] min-h-screen flex flex-col items-center px-6 py-12">
            {/* Title */}
            <div className="flex justify-center mb-10 md:-mt-10">
                <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-amber-600 bg-gradient-to-br from-amber-100/75 to-amber-300/75 px-6 py-2 rounded-xl shadow-md backdrop-blur-sm">
                    Contact
                </p>
            </div>

            {/* Contact Form */}
            <form
                onSubmit={onSubmit}
                className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-amber-200/50"
            >
                <h2 className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold mb-6 text-amber-700 text-justify">
                    Open to new ideas, opportunities, and collaborations — drop me a message! ✉️
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full border border-amber-300/70 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full border border-amber-300/70 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full border border-amber-300/70 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-all shadow-md"
                >
                    Send Message
                </button>

                {result && (
                    <p className="text-center text-sm text-gray-600 mt-3">{result}</p>
                )}
            </form>

            {/* Success Card Animation */}
            {showSuccess && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                        <FaCheckCircle className="text-green-500 w-16 h-16 mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">
                            Message Sent!
                        </h3>
                        <p className="text-gray-600 text-center">
                            Thank you for reaching out. I’ll get back to you soon!
                        </p>
                    </div>
                </div>
            )}

            {/* Social Links */}
            <div className="mt-12 flex flex-col items-center gap-4">
                <p className="text-lg text-amber-700 font-medium">Connect with me</p>
                <div className="flex gap-6 text-amber-700">
                    <a
                        href="mailto:burhanasikwala@gmail.com"
                        className="hover:text-amber-500 transition"
                        title="Email"
                    >
                        <FaEnvelope size={28} />
                    </a>
                    <a
                        href="https://github.com/Ben-Benston/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-500 transition"
                        title="GitHub"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/burhanuddinnasikwala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-500 transition"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={28} />
                    </a>
                </div>
            </div>
        </div>
    );
}
