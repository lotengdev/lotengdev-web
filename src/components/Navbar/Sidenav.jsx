import { Brand } from "./Brand";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export function Sidenav({ handleCloseSidenav, darkMode }) {
    return (
        <div className={`bg-slate-700/80 w-screen h-screen absolute top-0 left-0 z-[99]`}>
            <aside className={`w-[70dvw] h-[100dvh] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <header className="flex justify-between p-4">
                    <Brand url="/" onClick={handleCloseSidenav} />
                    <button className="p-2 rounded-full bg-slate-100 w-[36px] h=[44px] inline-flex items-center justify-center" onClick={handleCloseSidenav}>&times;</button>
                </header>

                <nav>
                    <ul className="flex flex-col gap-8">
                        <li className="">
                            <Link to="/" onClick={handleCloseSidenav} className={`px-4 py-2 transition duration-300 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 hover:text-white' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>Home</Link>
                        </li>
                        <li className="">
                            <Link to="/event" onClick={handleCloseSidenav} className={`px-4 py-2 transition duration-300 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 hover:text-white' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>Acara</Link>
                        </li>
                        <li className="">
                            <Link to="/speaker" onClick={handleCloseSidenav} className={`px-4 py-2 transition duration-300 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 hover:text-white' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>Pembicara</Link>
                        </li>
                        <li className="">
                            <Link to="/about" onClick={handleCloseSidenav} className={`px-4 py-2 transition duration-300 ${darkMode ? 'bg-gray-800 hover:bg-blue-600 hover:text-white' : 'bg-white hover:bg-blue-600 hover:text-white'}`}>Tentang</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

Sidenav.propTypes = {
    handleCloseSidenav: PropTypes.func,
    darkMode: PropTypes.bool, // Add darkMode prop
};
