import React from 'react';
import TrakingCards from './TrakingCards';
import { Root } from '@/types/Types';
import DataFetch from '@/fetchdata/page';

const TrakingApp = async () => {

    const Cards = await DataFetch();
    console.log(Cards);
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            {/* Grid container with responsive columns and spacing */}
            <div className="mb-8 text-center">
                <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                    All Apps
                </h1>
                <p className="text-lg text-gray-600">
                    Explore all apps on the market developed by top developers
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">

                {Cards && Cards.length > 0 ? (
                    Cards.slice(0, 8).map((card: Root) => (
                        <TrakingCards key={card.id} Count={card} />
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-gray-500">
                        <p className="text-lg font-medium">No cards available at the moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TrakingApp;