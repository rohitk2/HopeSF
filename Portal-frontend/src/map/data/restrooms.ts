import restroomsCSV from './restrooms.csv?raw';

interface Restroom {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  type: string;
}

function parseCSV(csvText: string): Restroom[] {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map((line, index) => {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const row: Record<string, string> = {};
    headers.forEach((header, i) => {
      row[header] = values[i] || '';
    });
    
    return {
      id: index + 1,
      name: row.name,
      address: row.address,
      lat: parseFloat(row.lat),
      lng: parseFloat(row.lng),
      type: row.type
    };
  });
}

export const restrooms = parseCSV(restroomsCSV);