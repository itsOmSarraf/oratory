import React from 'react';
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { FaPencil } from "react-icons/fa6";
const Sidebar = () => {
    return (
        <aside className="p-4 bg-white shadow-md static right-0 bottom-0 top-0">
            <div className="flex space-x-4 mb-6 border-b pb-4">
                <button className="flex items-center justify-center space-x-2 py-2 px-4 border border-[#DC4A2D] rounded-xl text-[#DC4A2D]">
                    <ImBin />
                    <span>Delete job</span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-2 px-4 bg-[#DC4A2D] text-white rounded-xl">
                    <FaPencil />
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