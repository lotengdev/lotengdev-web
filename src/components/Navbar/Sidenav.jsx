import { Brand } from "./Brand";
import { Link } from "react-router-dom";

export function Sidenav({ handleCloseSidenav }) {

    return (
        <div className="bg-slate-700/80 w-screen h-screen absolute top-0 left-0 z-[99]">

            <aside className="bg-white w-[70dvw] h-[100dvh]">
                <header className="flex justify-between p-4">
                    <Brand url="/" onClick={handleCloseSidenav} />
                    <button className="p-2 rounded-full bg-slate-100 w-[36px] h=[44px] inline-flex items-center justify-center" onClick={handleCloseSidenav}>&times;</button>
                </header>

                <nav>
                    <ul className="flex flex-col gap-8">
                        <li className="">
                            <Link to="/" onClick={handleCloseSidenav} className="bg-white text-gray-800 px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-300">Home</Link>
                        </li>
                        <li className="">
                            <Link to="/event" onClick={handleCloseSidenav} className="bg-white text-gray-800 px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-300">Acara</Link>
                        </li>
                        <li className="">
                            <Link to="/speaker" onClick={handleCloseSidenav} className="bg-white text-gray-800 px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-300">Pembicara</Link>
                        </li>
                        <li className="">
                            <Link to="/about" onClick={handleCloseSidenav} className="bg-white text-gray-800 px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-300">Tentang</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

Sidenav.propTypes = {
    handleCloseSidenav: PropTypes.func,
};
