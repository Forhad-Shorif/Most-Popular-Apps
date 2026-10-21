import React from 'react';

const DataFetch = async () => {
   
    const res = await fetch('/data.json');
    
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const jsonData = await res.json();
    return jsonData;
};

export default DataFetch;