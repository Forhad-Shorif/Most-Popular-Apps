import 'server-only';
import fs from 'fs';
import path from 'path';

const DataFetch = async () => {
    try {
        const filePath = path.join(process.cwd(), 'public', 'data.json');
        
        const fileContents = fs.readFileSync(filePath, 'utf8');
    
        const jsonData = JSON.parse(fileContents);
        return jsonData;
    } catch (error) {
        return []; 
    }
};

export default DataFetch;