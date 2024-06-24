"use client"
import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('Job preview');

    return (
        <div className="border-b">
            <nav className="flex space-x-8 max-w-4xl mx-auto p-8">
                {['Job preview', 'Applicants', 'Match', 'Messages'].map((tab) => (
                    <Link key={tab} href="#">
                        <p
                            className={`${activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'
                                } hover:text-red-500 transition`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </p>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default NavBar;
