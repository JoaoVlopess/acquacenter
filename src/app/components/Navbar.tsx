import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) {
            setMenu(false);
          }
        };
      
        handleResize();
        window.addEventListener("resize", handleResize);
      
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <nav className="flex justify-between items-center bg-BlueCenter py-5 px-20 shadow-lg w-full">
            <a href="" className="text-white text-3xl sm:text-3xl font-montserrat hover:cursor-default">
                Acqua Center
            </a>

            <div className="">
                <ul className={` flex flex-col items-start justify-start fixed top-[75px] right-0 w-80 h-screen bg-blue-900 shadow-lg pt-10 pl-0 pb-0 pr-3 text-white font-medium
            md:flex-row md:relative md:w-auto md:h-auto md:bg-transparent md:p-0 md:top-0 md:shadow-none ${menu? "right-[-320px]" : "right-0" }  transition-all duration-300 ease-in-out` }>

                    <li className="mb-7 md:mb-0"><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]">HOME</a></li>
                    <li className="mb-7 md:mb-0"><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]">PRODUTOS</a></li>
                    <li className="mb-7 md:mb-0"><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]">BENEFÍCIOS</a></li>
                    <li className="mb-7 md:mb-0"><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%] ">NÓS</a></li>
                    <li className="md:mb-0"><a href="" className="relative px-5 ease-in-out hover:text-gray-300 after:content-[''] after:absolute after:left-[20px] after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-[30%]  ">CONTATO</a></li>
                </ul>
            </div>

            <button onClick={handleToggleMenu} className="text-white block md:hidden text-[24px]">
                <FontAwesomeIcon icon={menu ? faBars : faTimes} />
            </button>
        </nav>
    );
}
export default Navbar;