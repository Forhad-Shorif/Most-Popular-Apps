'use client';
import React, { useContext } from 'react';
import { AppContext } from '@/contex/AppProvider';
import { Root } from '@/types/Types';

interface InstallButtonProps {
    Items: Root;
}

const InstallButtonId = ({ Items }: InstallButtonProps) => {
    console.log('Items:', Items); // Log the Items prop to check its value
    const { appData, setAppData } = useContext(AppContext);
  const isAlreadyInstalled = appData.some((app) => String(app.id) === String(Items.id));
    const handleInstall = () => {
      
        if (!isAlreadyInstalled) {
            setAppData([...appData, Items]);
        }
    };

    return (
        <div>
            <button
                className="btn btn-primary sm:self-center w-full sm:w-auto shadow-md disabled:bg-gray-400"
                onClick={() => handleInstall()}
                disabled={isAlreadyInstalled}
            >
                {isAlreadyInstalled ? 'Already Installed' : 'Download App'}
            </button>
        </div>
    );
};

export default InstallButtonId;