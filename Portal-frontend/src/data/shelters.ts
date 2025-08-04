import sheltersCSV from './shelters.csv?raw';

interface Shelter {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  type: string;
  inventory: {
    "total beds": number;
    "beds filled": number;
    "waitlist": number;
    "showers": number;
  };
}

function parseCSV(csvText: string): Shelter[] {
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
      type: 'shelter',
      inventory: {
        "total beds": parseInt(row["total beds"]) || 0,
        "beds filled": parseInt(row["beds filled"]) || 0,
        "waitlist": parseInt(row.waitlist) || 0,
        "showers": parseInt(row.showers) || 0
      }
    };
  });
}

export const shelters = parseCSV(sheltersCSV);