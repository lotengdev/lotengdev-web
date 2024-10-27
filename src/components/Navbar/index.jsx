import { Brand } from "./Brand"
import { Link } from "react-router-dom";
// Icons
import TelegramIcon from "@/assets/icons/telegram.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HamburgerIcon from '@/assets/icons/menu.svg';

function CTAButtons() {
    return (
        <div className="hidden lg:flex justify-center">
            <a href="https://t.me/lotengdev" target="_blank" className="flex items-center bg-blue-600 px-4 py-3 mr-4 rounded text-white">
                <img className="inline mr-3" src={TelegramIcon} />Join Group
            </a>
            <a href="https://github.com/lotengdev/lotengdev-web/" target="_blank" className="flex items-center bg-neutral-100 border border-solid border-grey px-4 py-2 rounded">
                <img className="inline mr-3" src={GithubIcon} />Contribute
            </a>
        </div>
    )
}


export default function Navbar() {
    return (
        <nav className="px-6 py-4 flex items-center shadow-md">
            <Brand url="/" />
            <ul className="hidden lg:flex flex-grow justify-center list-none">
                <li className="mr-8">
                    <Link 
                        to="/" 
                        className="transition-all duration-200 border-b-2 border-transparent hover:border-black hover:scale-105"
                    >
                        Home
                    </Link>
                </li>
                <li className="mr-8">
                    <Link 
                        to="/event" 
                        className="transition-all duration-200 border-b-2 border-transparent hover:border-black hover:scale-105"
                    >
                        Acara
                    </Link>
                </li>
                <li className="mr-8">
                    <Link 
                        to="/speaker" 
                        className="transition-all duration-200 border-b-2 border-transparent hover:border-black hover:scale-105"
                    >
                        Pembicara
                    </Link>
                </li>
                <li className="mr-8">
                    <Link 
                        to="/about" 
                        className="transition-all duration-200 border-b-2 border-transparent hover:border-black hover:scale-105"
                    >
                        Tentang
                    </Link>
                </li>
            </ul>
            <CTAButtons />
            <div className="lg:hidden flex flex-grow justify-end">
                <img src={HamburgerIcon} alt="Menu" />
            </div>
        </nav>
    )
}
