import { useState } from 'react';
import { Brand } from "./Brand";
import { Link } from "react-router-dom";
// Icons
import { FaPaperPlane, FaGithub, FaBars, FaXmark } from "react-icons/fa6";


function CTAButtons({ toggleTheme, darkMode }) {
    return (
        <div className="hidden lg:flex justify-center items-center">
            {/* Toggle Switch for Dark/Light Mode */}
            <div className="flex items-center mr-4">
                <span className="mr-2">Light</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" onChange={toggleTheme} className="sr-only peer" checked={darkMode} />
                    <div className="w-10 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-gray-600 transition-colors duration-200"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 peer-checked:translate-x-full"></div>
                </label>
                <span className="ml-2">Dark</span>
            </div>
            {/* Join Group Button */}
            <a href="https://t.me/lotengdev" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-600 px-4 py-2.5 mr-4 rounded text-white">
                <FaPaperPlane className="inline mr-2 w-4 h-4" />Join Group
            </a>
            {/* Contribute Button */}
            <a 
                href="https://github.com/lotengdev/lotengdev-web/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center px-4 py-2 rounded ${darkMode ? 'bg-neutral-600 text-white border border-solid border-gray-400' : 'bg-neutral-100 text-black border border-solid border-grey'}`}
            >
                <FaGithub className="inline mr-2 w-4 h-4" />Contribute
            </a>
        </div>
    );
}

export default function Navbar({ darkMode, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`px-6 py-4 flex items-center shadow-md relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* Brand Logo Container with Smaller, Defined Transparent Background */}
            <div className={`flex items-center p-1 rounded ${darkMode ? 'bg-white bg-opacity-20 shadow-md' : ''}`}>
                <Brand url="/" />
            </div>
            {/* Navigation for small screens */}
            <div className="lg:hidden flex flex-grow justify-end items-center">
                <button onClick={toggleNavbar} aria-label="Toggle navigation" className="relative ">
                    {isOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>

                {/* Mobile Menu */}
                <div className={`py-6 flex flex-col justify-between fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="flex flex-col px-6">
                        <div className="pb-7 justify-between flex items-center lg:border-r border-solid border-grey">
                            <Brand to={'/'} onClick={toggleNavbar} />
                            <button onClick={toggleNavbar} className='text-xl p-1'><FaXmark className="w-5 h-5 text-gray-700" /></button>
                        </div>

                        <li className="my-4">
                            <Link to="/" onClick={toggleNavbar} className="text-sm hover:text-blue-600 text-black">Home</Link>
                        </li>
                        <li className="my-4">
                            <Link to="/event" onClick={toggleNavbar} className="text-sm hover:text-blue-600 text-black">Acara</Link>
                        </li>
                        <li className="my-4">
                            <Link to="/speaker" onClick={toggleNavbar} className="text-sm hover:text-blue-600 text-black">Pembicara</Link>
                        </li>
                        <li className="my-4">
                            <Link to="/about" onClick={toggleNavbar} className="text-sm hover:text-blue-600 text-black">Tentang</Link>
                        </li>
                        <li className="my-4">
                            <Link to="/contact" onClick={toggleNavbar} className="text-sm hover:text-blue-600 text-black">Kontak</Link>
                        </li>
                    </ul>

                    <div className="px-6 flex gap-4 flex-col justify-center mt-20">
                        <a href="https://t.me/lotengdev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 px-4 py-3 rounded text-xs text-white">
                            <FaPaperPlane className="inline mr-2 w-4 h-4" />Join Group
                        </a>
                        <a href="https://github.com/lotengdev/lotengdev-web/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-xs ${darkMode ? 'bg-neutral-600 text-white border border-solid border-gray-400' : 'bg-neutral-100 text-black border border-solid border-grey'} px-4 py-2 rounded`}>
                            <FaGithub className="inline mr-2 w-4 h-4" />Contribute
                        </a>
                    </div>
                </div>

                {/* Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleNavbar} />
                )}
            </div>

            {/* Navigation for large screens */}
            <ul className="hidden lg:flex flex-grow pl-10 list-none">
                <li className="mr-8">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                </li>
                <li className="mr-8">
                    <Link to="/event" className="hover:text-blue-600">Acara</Link>
                </li>
                <li className="mr-8">
                    <Link to="/speaker" className="hover:text-blue-600">Pembicara</Link>
                </li>
                <li className="mr-8">
                    <Link to="/about" className="hover:text-blue-600">Tentang</Link>
                </li>
                <li className="mr-8">
                    <Link to="/contact" className="hover:text-blue-600">Kontak</Link>
                </li>
            </ul>

            <CTAButtons toggleTheme={toggleTheme} darkMode={darkMode} />
        </nav>
    );
}
