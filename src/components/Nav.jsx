import logo from '../assets/logo.png';
import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';
import { FaGreaterThan } from 'react-icons/fa';

const Nav = () => {
    return (
        <>
            <div className="bg-[#434344]">
                <nav className="container mx-auto flex items-center justify-between text-white p-4 pl-72">
                    <div className="flex items-center text-[#d9d9da]">
                        <a href="#" className="mr-4">
                            <img src={logo} alt="Apple" className="h-5 mr-8" />
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            Store
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            Mac
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            iPad
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            iPhone
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            Watch
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            AirPods
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            TV &amp; Home
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            Entertainment
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            Accessories
                        </a>
                        <a href="#" className="mr-8 text-sm hover:text-white">
                            Support
                        </a>
                        <a href="#" className="mr-8 hover:text-white">
                            <AiOutlineSearch size={20} />
                        </a>
                        <a href="#" className="hover:text-white">
                            <AiOutlineShopping size={20} />
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Nav;
