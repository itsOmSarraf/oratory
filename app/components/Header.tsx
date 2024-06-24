import React from 'react';
import { FaSuitcase } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { FiBell } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import Image from 'next/image';
const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 flex justify-center items-center">
                    Logo
                </div>
            </div>
            <nav className="flex space-x-6">
                <button className="flex items-center space-x-2 p-2 rounded-full bg-[#DC4A2D] text-white">
                    <FaSuitcase />
                    <span>Jobs</span>
                </button>
                <button className=" flex items-center space-x-2 p-2 rounded-full text-gray-500">
                    <div className='relative'>
                        <FaRegMessage />
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
                    </div>
                    <span>Messages</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded-full text-gray-500">
                    <GiReceiveMoney />
                    <span>Payments</span>
                </button>
            </nav>
            <div className="flex items-center space-x-4">
                <button className="relative text-gray-500">
                    <FiBell />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
                </button>
                <button className="text-black">
                    <div className='flex'>
                        <Image src='https://logos-world.net/wp-content/uploads/2023/03/Atlassian-Logo.png' width={30} height={30} alt='Atlassian logo' />
                        <div>
                            <FaAngleDown />
                        </div>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
