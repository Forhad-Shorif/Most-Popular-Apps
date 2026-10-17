import React from 'react';

const DataFetch = async () => {
 const data = await fetch('http://localhost:3000/data.json');
    const jsonData = await data.json();
    return jsonData;
};

export default DataFetch;