import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

export function Footer({ isDarkMode }) {
    return (
        <footer className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="container mx-auto mt-5 mb-5 flex justify-center items-center">
                <hr className={`border-t-[1px] rounded-lg ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} sm:w-full w-[95%]`} />
            </div>
            <ul className="flex flex-row w-full justify-center items-center gap-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to={'/'} className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Home</Link>
                </li>
                <li>
                    <Link to={'/event'} className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Events</Link>
                </li>
                <li>
                    <Link to={'/speaker'} className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Speakers</Link>
                </li>
                <li>
                    <Link to={'/about'} className={`hover:text-blue-600 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>About</Link>
                </li>
                <li>
                    <a href="https://www.instagram.com/lotengdev/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="w-5 h-5 hover:text-pink-600 transition-colors" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@lotengdev4516" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <FaYoutube className="w-5 h-5 hover:text-red-600 transition-colors" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
