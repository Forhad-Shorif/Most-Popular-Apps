import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DataFetch from '@/fetchdata/page';
import { Root } from '@/types/Types';
import InstallButton from '@/components/Apps/InstallButton';

interface VewCardsProps {
    params: Promise<{
        id: string;
    }>;
}

const VewCards = async ({ params }: VewCardsProps) => {
   
    const { id } = await params;
    //   fetch data
    const data = await DataFetch();
    const item: Root | undefined = data?.find((card: Root) => card.id === parseInt(id));

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-base-200/50 py-10 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-base-100 rounded-3xl p-6 sm:p-8 shadow-xl border border-base-200">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-base-200">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl shadow-md border border-base-200">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="badge badge-primary text-xs font-semibold">App Details</span>
                            <span className="text-xs text-base-content/60">ID: #{item.id}</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-base-content">
                            {item.title}
                        </h1>
                        <p className="text-sm font-medium text-base-content/70">
                            By <span className="text-primary">{item.companyName}</span>
                        </p>
                    </div>
                   <InstallButton Items={item} />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-base-200 text-center">
                    <div className="p-3 bg-base-200/50 rounded-2xl">
                        <p className="text-xs text-base-content/60">Rating</p>
                        <p className="text-lg font-bold text-warning mt-0.5">★ {item.ratingAvg}</p>
                    </div>
                    <div className="p-3 bg-base-200/50 rounded-2xl">
                        <p className="text-xs text-base-content/60">Downloads</p>
                        <p className="text-lg font-bold text-base-content mt-0.5">{item.downloads}</p>
                    </div>
                    <div className="p-3 bg-base-200/50 rounded-2xl">
                        <p className="text-xs text-base-content/60">Reviews</p>
                        <p className="text-lg font-bold text-base-content mt-0.5">{item.reviews}</p>
                    </div>
                    <div className="p-3 bg-base-200/50 rounded-2xl">
                        <p className="text-xs text-base-content/60">Size</p>
                        <p className="text-lg font-bold text-base-content mt-0.5">{item.size} MB</p>
                    </div>
                </div>

                {/* Description Section */}
                <div className="py-6 space-y-3">
                    <h2 className="text-lg font-bold text-base-content">About this App</h2>
                    <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
                        {item.description}
                    </p>
                </div>

                {/* User Feedback & Rating Chart */}
                {item.ratings && item.ratings.length > 0 && (
                    <div className="pt-6 border-t border-base-200">
                        <h3 className="text-lg font-bold text-base-content mb-4">User Ratings & Reviews</h3>

                        <div className="space-y-2.5">
                            {item.ratings.map((rate, idx) => {
                                //  calculate total ratings
                                const totalRatings = item.ratings.reduce((acc, curr) => acc + curr.count, 0);
                                const percentage = totalRatings > 0 ? Math.round((rate.count / totalRatings) * 100) : 0;

                                return (
                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                        {/* Star Label (Left) */}
                                        <span className="w-16 font-medium text-base-content/70 whitespace-nowrap">
                                            {rate.name}
                                        </span>

                                        {/* Left to Right Progress Bar */}
                                        <div className="flex-1 bg-base-200 rounded-full h-3 overflow-hidden">
                                            <div
                                                className="bg-warning h-full rounded-full transition-all duration-500"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>

                                        {/* Count & Percentage (Right) */}
                                        <div className="w-24 text-right text-xs text-base-content/60 font-semibold">
                                            {rate.count.toLocaleString()} ({percentage}%)
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Back Link */}
                <div className="mt-8 pt-4">
                    <Link href="/apps" className="btn btn-ghost btn-sm gap-2 text-base-content/70">
                        ← Back to All Apps
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default VewCards;