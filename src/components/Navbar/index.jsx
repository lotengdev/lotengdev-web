import { useState } from 'react';
import { Brand } from "./Brand";
import { Link } from "react-router-dom";
// Icons
import TelegramIcon from "@/assets/icons/telegram.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HamburgerIcon from '@/assets/icons/menu.svg';
import { Sidenav } from './Sidenav';


function CTAButtons() {
    return (
        <div className="hidden lg:flex justify-center">
            <a href="https://t.me/lotengdev" target="_blank" className="flex items-center bg-blue-600 px-4 py-3 mr-4 rounded-full text-white shadow hover:bg-blue-700 transition duration-300">
                <img className="inline mr-3" src={TelegramIcon} alt="Telegram" />Join Group
            </a>
            <a href="https://github.com/lotengdev/lotengdev-web/" target="_blank" className="flex items-center bg-neutral-100 border border-solid border-grey px-4 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300">
                <img className="inline mr-3" src={GithubIcon} alt="Github" />Contribute
            </a>
        </div>
    );
}

export default function Navbar() {
    const [sideNavOpen, setsideNavOpen] = useState(false);

    const openSidenav = () => {
        setsideNavOpen(true);
    };

    const closeSideNav = (event) => {
        setsideNavOpen(false);
    }

    return (
        <>
            <nav className="px-6 py-4 flex items-center shadow-md relative justify-between">
                <Brand url="/" />
                <ul className="hidden lg:flex flex-grow pl-10 list-none">
                    <li className="mr-4">
                        <Link to="/" className="bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300">Home</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/event" className="bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300">Acara</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/speaker" className="bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300">Pembicara</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/about" className="bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300">Tentang</Link>
                    </li>
                </ul>

                <button
                    onClick={openSidenav}
                    aria-label="Toggle navigation"
                    className="block md:hidden"
                >
                    <img src={HamburgerIcon} alt="Menu Icon" className="w-6 h-6" />
                </button>

                <CTAButtons />
            </nav>
            {sideNavOpen && <Sidenav handleCloseSidenav={closeSideNav} />}
        </>
    );
}