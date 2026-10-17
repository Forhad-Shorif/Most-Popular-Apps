'use client';
import TrakingCards from '@/components/home/TrakingCards';
import InstallApp from '@/components/sheare/InstallApp';
import { AppContext } from '@/contex/AppProvider';
import { Root } from '@/types/Types';
import React, { useContext } from 'react';

const InstallationApp = () => {
    const {appData} = useContext(AppContext);

    return (
       <div className="max-w-7xl mx-auto px-4 py-8">
             <div className="mb-8 text-center">
                <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                    Welcome to the Tor Page
                </h1>
                <p className="text-lg text-gray-600">
                    This is a sample page for the Tor application.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {appData.length > 0 ? (
                    appData.map((item: Root) => <InstallApp key={item.id} Count={item} />)
                ) : (
                    <p>No items available.</p>
                )}
            </div>
        </div>
    );
};

export default InstallationApp;