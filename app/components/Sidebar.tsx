import React from 'react';
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="p-4 bg-white shadow-md">
            <div className="flex space-x-4 mb-6 border-b pb-4">
                <button className="flex items-center justify-center space-x-2 py-2 px-4 border border-[#DC4A2D] rounded-full text-[#DC4A2D]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm1-2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5z" clipRule="evenodd" />
                    </svg>
                    <span>Delete job</span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-2 px-4 bg-[#DC4A2D] text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 010 2.828l-10 10a2 2 0 01-.707.414l-4 1a1 1 0 01-1.265-1.265l1-4a2 2 0 01.414-.707l10-10a2 2 0 012.828 0zM4 13.414L5.586 12 4 10.414 2.414 12 4 13.414zM6.828 11L12 5.828l1.586 1.586L8.414 13H6v-1.586l.828-.828zM15 3.414l1.586 1.586-2.122 2.122-1.586-1.586L15 3.414z" />
                    </svg>
                    <span>Edit job</span>
                </button>
            </div>
            <ul className="space-y-4">
                <li className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <MdOutlinePeopleAlt />
                        <span>Applicants</span>
                    </div>
                    <span className="text-gray-900 font-semibold">400</span>
                </li>
                <li className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <BsFillPersonCheckFill />
                        <span>Matches</span>
                    </div>
                    <span className="text-gray-900 font-semibold">100</span>
                </li>
                <li className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FaRegMessage />
                        <span>Messages</span>
                    </div>
                    <span className="text-gray-900 font-semibold">147</span>
                </li>
                <li className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FaEye />
                        <span>Views</span>
                    </div>
                    <span className="text-gray-900 font-semibold">800</span>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;