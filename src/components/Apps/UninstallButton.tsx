import Link from 'next/link';
import React, { useContext } from 'react';
import { Root } from '@/types/Types';
import { AppContext } from '@/contex/AppProvider';

interface CardProps {
    Count: Root;
}

const UninstallButton = ({ Count }: CardProps) => {

  const {appData, setAppData} = useContext(AppContext);

  const HandleUninstall = () => {
    setAppData(appData.filter((app) => String(app.id) !== String(Count.id)));
  }


    return (
          <div className="flex justify-center gap-4 mt-1">
            <Link href={`/apps/${Count.id}`}>
                <button className="mt-4 w-full rounded-xl bg-blue-600 py-2 px-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-700 active:scale-[0.98]">
                    App Details
                </button>
            </Link>
            <button onClick={HandleUninstall} className="mt-4 w-full rounded-xl bg-red-600 py-2 px-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-red-700 active:scale-[0.98]">
                Uninstall
            </button>
        </div>
    );
};

export default UninstallButton;