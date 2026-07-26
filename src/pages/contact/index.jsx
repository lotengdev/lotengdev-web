import React from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa6';

export function ContactPage({ isDarkMode }) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const userId = import.meta.env.VITE_USER_ID;
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Loteng Dev',
            to_email: 'bireshkumar1964@gmail.com',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log("Email sent successfully", response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log("Email failed to send", error);
            });
    };

    return (
        <div className={`min-h-screen flex justify-center items-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <form onSubmit={handleSubmit} className={`lg:w-[970px] w-[95%] rounded-3xl p-5 px-10 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <div className="text-[color:#41B883] font-medium text-lg mb-4 flex items-center">
                    <span>Contact Loteng Dev</span>
                    <div className="flex ml-3 items-center gap-3">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lotengdev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                            <FaEnvelope className="w-5 h-5 hover:text-blue-500 transition-colors" />
                        </a>
                        <a href="https://t.me/lotengdev" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <FaPaperPlane className="w-5 h-5 hover:text-blue-500 transition-colors" />
                        </a>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full p-3 mb-4 border rounded-lg text-lg ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-3 mb-4 border rounded-lg text-lg ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                />
                <textarea
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full p-3 mb-4 border rounded-lg text-lg ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
                ></textarea>
                <button
                    type="submit"
                    className="bg-[color:#41B883] text-white font-bold py-2 px-6 rounded-lg text-lg"
                >
                    Send Email
                </button>
            </form>
        </div>
    );
}
