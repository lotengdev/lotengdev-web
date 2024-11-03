import { Link } from "react-router-dom";

export function Footer({ isDarkMode }) {
    return (
        <footer className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="container mx-auto mt-5 mb-5 flex justify-center items-center">
                <hr className={`border-t-[1px] rounded-lg ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} sm:w-full w-[95%]`} />
            </div>
            <ul className="flex flex-row w-full justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li className="">
                    <Link to={'/'} className="mr-4 md:mr-6   ">Home</Link>
                <li>
                    <Link to={'/'} className={`mr-4 md:mr-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Home</Link>
                </li>
                <li>
                    <Link to={'/event'} className={`mr-4 md:mr-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Events</Link>
                </li>
                <li>
                    <Link to={'/speaker'} className={`mr-4 md:mr-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Speakers</Link>
                </li>
                <li>
                    <Link to={'/about'} className={`mr-4 md:mr-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>About</Link>
                </li>
                <li className="mr-6 ">
                    <a href="https://www.instagram.com/lotengdev/" target="_blank" rel="noopener noreferrer">
                    <i class='bx bxl-instagram text-pink-500 text-3xl'></i>
                    </a>
                </li>
                <li className="mr-6">
                    <a href="https://www.youtube.com/@lotengdev4516" target="_blank" rel="noopener noreferrer">
                    <i class='bx bxl-youtube text-red-500 text-4xl'></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}
