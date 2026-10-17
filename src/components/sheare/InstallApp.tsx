import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Root } from '@/types/Types';
import UninstallButton from '../Apps/UninstallButton';

interface CardProps {
    Count: Root;
}

const InstallApp = ({ Count }: CardProps) => {
    return (
        <div className="relative max-w-sm rounded-2xl border border-gray-100 bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl">
            {/* Top 1 Badge */}
            <div className="absolute -top-3 -left-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900 shadow-md">
                🏆 #1 Top App
            </div>

            {/* Header: Image, Title, Company Name */}
            <div className="flex items-center gap-4">
                <Image
                    src={Count.image}
                    alt={Count.title}
                    height={64}
                    width={64}
                    className="h-16 w-16 rounded-2xl object-cover shadow-sm"
                />
                <div className="flex-1 overflow-hidden">
                    <h3 className="truncate text-lg font-bold text-gray-800" title={Count.title}>
                        {Count.title}
                    </h3>
                    <p className="truncate text-sm text-gray-500">{Count.companyName}</p>

                    {/* Rating & Downloads */}
                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-600">
                        <span className="flex items-center gap-1 font-semibold text-amber-500">
                            ★ {Count.ratingAvg}
                        </span>
                        <span>•</span>
                        <span>{Count.downloads} Downloads</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="mt-4 line-clamp-2 text-xs text-gray-600 leading-relaxed">
                {Count.description}
            </p>

            {/* Size & Reviews Count */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                <div>
                    <span className="font-medium text-gray-700">Size:</span> {Count.size} MB
                </div>
                <div>
                    <span className="font-medium text-gray-700">Reviews:</span> {Count.reviews}
                </div>
            </div>

            {/* Download/Install Button */}
                <UninstallButton Count={Count} />
        </div>
    );
};

export default InstallApp;