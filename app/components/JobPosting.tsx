import Image from "next/image";
import { FC } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
const JobPosting: FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-500">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold mb-0">Senior Product Designer</h1>
                <div className="flex items-center gap-2">
                    <p className="text-gray-400 mb-0 text-sm">· posted 2 days ago</p>
                    <span className="flex items-center text-green-600 bg-green-200 px-1 text-sm rounded-xl border-2 border-green-400">
                        <span className="text-gray-md mr-1">· </span>
                        Open
                    </span>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <p className="text-gray-500 mb-4 mr-4">
                    <span className="inline-flex items-center">
                        <IoLocationSharp className="mr-1" />
                        Delaware, USA · <FaCoins className="mr-2 ml-1" />$300k-$400k
                    </span>
                </p>
            </div>
            <hr className="mb-2" />
            <div className="flex">
                <div className="flex flex-col items-start mr-8">
                    <h2 className="mb-2">Skills Required</h2>
                    <div className="flex flex-col items-start mb-4">
                        <div className="flex items-center mb-2 mr-2 border-2 border-gray-200 p-1 rounded-lg font-semibold gap-1">
                            <div>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Figma Logo" width={10} height={10} />
                            </div>
                            <span className="text-sm font-semibold rounded">Figma</span>
                        </div>
                        <div className="flex items-center mb-2 mr-2 border-2 border-gray-200 p-1 rounded-lg font-semibold gap-1">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png" alt="Adobe Illustrator Logo" width={20} height={20} />
                            <span className="text-sm font-semibold rounded">Adobe Illustrator</span>
                        </div>
                        <div className="flex items-center mb-2 mr-2 border-2 border-gray-200 p-1 rounded-lg font-semibold gap-1">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" alt="Adobe XD Logo" width={20} height={20} />
                            <span className="text-sm font-semibold rounded">Adobe XD</span>

                        </div>
                    </div>
                </div>
                <div className="flex mr-8 gap-5">
                    <div>
                        <p className="mb-4 font-normal text-gray-600">Preferred Language:</p>
                        <span className="text-gray-600 font-bold">English</span>
                    </div>
                    <div>
                        <p className="mb-4 font-normal text-gray-600">Type:</p>
                        <span className="text-gray-600 font-bold">Full Time</span>
                    </div>
                    <div>
                        <p className="mb-4 font-normal text-gray-600">Years of Experience:</p>
                        <span className="text-gray-600 font-bold">3+ Years of Experience</span>
                    </div>
                </div>
            </div>
            <hr className="mb-10" />
            <h2 className="text-md font-bold mb-2 text-gray-700">About the job</h2>
            <ol className="list-decimal list-inside mb-4">
                <li>Handle the UI/UX research design</li>
                <li>Work on researching the latest web applications designs & trends</li>
                <li>Work on conceptualizing and visualizing</li>
                <li>Work on creating graphics content and other graphic-related works</li>
            </ol>

            <h2 className="text-gray-md font-bold text-gray-700 mb-2">Benefits:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Health insurance</li>
                <li>Provident Fund</li>
            </ul>

            <h2 className="text-gray-md font-bold text-gray-700 mb-2">Schedule:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Day shift</li>
            </ul>

            <h2 className="text-gray-md font-bold text-gray-700  mb-2">Supplemental pay types:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
            </ul>
            <div className="flex items-center gap-2">
                <h2 className="text-gray-md font-bold text-gray-700">Work Location:</h2>
                <p className="mt-1">In person</p>
            </div>
        </div >
    );
};

export default JobPosting;