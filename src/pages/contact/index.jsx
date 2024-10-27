import React from 'react';
import emailjs from '@emailjs/browser';

import emailIcon from '@/assets/icons/email-icon.png';
import telegramIcon from '@/assets/icons/telegram-icon.png';

export function ContactPage() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //EmailJs serviceID, templateID, userID
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const userId = import.meta.env.VITE_USER_ID;

        //Create a new object that contains dynamic template params
        const templateParams = {
            from_name:name,
            from_email:email,
            to_name:'Loteng Dev',
            to_email: 'bireshkumar1964@gmail.com',
            message:message,
        };

        //Send the email using email js
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log("Email sent successfully",response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log("Email failed to send",error);
            });
    }
    return (
        <div className="container mx-auto flex justify-center items-center w-full mt-6">
        <form onSubmit={handleSubmit} className="lg:w-[970px] w-[95%] bg-white rounded-3xl p-5 px-10">
            <div className="text-[color:#41B883] font-medium text-lg mb-4 flex items-center">
                <span>Contact Loteng Dev</span>
                <div className="flex ml-3">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lotengdev@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <img src={emailIcon} alt="Email Icon" className="w-6 h-6" />
                </a>
                <a href="https://t.me/lotengdev" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <img src={telegramIcon} alt="Telegram Icon" className="w-6 h-6" />
                </a>
            </div>
            </div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg"
            />
            <textarea
                placeholder="Message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-lg"
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