'use client';
import React, { createContext, ReactNode, useState } from 'react';
import { Root } from '@/types/Types';

interface AppProviderProps {
    appData: Root[];
    setAppData: React.Dispatch<React.SetStateAction<Root[]>>;
}

export const AppContext = createContext<AppProviderProps>({
    appData: [],
    setAppData: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
    const [appData, setAppData] = useState<Root[]>([]);

    const sharedData = {
        appData,
        setAppData,
    };
    return (
        <div>
            <AppContext.Provider value={sharedData}>
                {children}
            </AppContext.Provider>
        </div>
    );
};

export default AppProvider;