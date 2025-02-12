import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setMenu(!menu)
    }
    return (
        <nav className="flex justify-between items-center bg-BlueCenter py-5 px-20 shadow-lg w-full">
            <a href="" className="text-white text-2xl md:text-4xl  font-montserrat hover:cursor-default">
                Acqua Center
            </a>

            <div className="">
                <ul className="flex  items-center content-center text-white font-medium ">
                    <li><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]">HOME</a></li>
                    <li><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]">PRODUTOS</a></li>
                    <li><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]">BENEFÍCIOS</a></li>
                    <li><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]">NÓS</a></li>
                    <li><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]">CONTATO</a></li>
                </ul>
            </div>

            <button onClick={handleToggleMenu} className="text-white flex md:hidden ">
                <FontAwesomeIcon icon={menu ? faTimes : faBars} size="1x" />
            </button>
        </nav>
    );
}
export default Navbar;