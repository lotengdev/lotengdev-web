import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="p-4">
            <div className="container mx-auto mt-5 mb-5 flex justify-center items-center">
                <hr className="border-t-[1px] rounded-lg border-grey sm:w-full w-[95%]" />
            </div>
            <ul className="flex flex-row w-full justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li className="">
                    <Link to={'/'} className="mr-4 md:mr-6   ">Home</Link>
                </li>
                <li>
                    <Link to={'/event'} className="mr-4 md:mr-6">Events</Link>
                </li>
                <li>
                    <Link to={'/speaker'} className="mr-4 md:mr-6">Speakers</Link>
                </li>
                <li>
                    <Link to={'/about'} className="mr-4 md:mr-6">About</Link>
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
    )
}
