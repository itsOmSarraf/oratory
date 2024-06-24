import { FC } from 'react';

const JobPosting: FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg text-black">
            <h1 className="text-3xl font-bold mb-4">Senior Product Designer</h1>
            <p className="text-gray-600 mb-2">Posted 2 days ago · <span className="text-green-500">Open</span></p>
            <p className="text-gray-800 mb-4">Delaware, USA · $300k-$400k</p>

            <div className="flex mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Figma</span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Adobe Illustrator</span>
                <span className="bg-purple-100 text-purple-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Adobe XD</span>
            </div>

            <p className="mb-4"><strong>Preferred Language:</strong> English</p>
            <p className="mb-4"><strong>Type:</strong> Full time</p>
            <p className="mb-4"><strong>Years of Experience:</strong> 3+ Years of Experience</p>

            <h2 className="text-xl font-semibold mb-2">About the job</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Handle the UI/UX research design</li>
                <li>Work on researching the latest web applications designs & trends</li>
                <li>Work on conceptualizing and visualizing</li>
                <li>Work on creating graphics content and other graphic-related works</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Benefits:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Health insurance</li>
                <li>Provident Fund</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Schedule:</h2>
            <p className="mb-4">Day shift</p>

            <h2 className="text-xl font-semibold mb-2">Supplemental pay types:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Work Location:</h2>
            <p>In person</p>
        </div>
    );
};

export default JobPosting;
