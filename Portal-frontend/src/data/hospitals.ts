import hospitalsCSV from './hospitals.csv?raw';

interface Hospital {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  type: string;
}

function parseCSV(csvText: string): Hospital[] {
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
      id: `hospital-${index + 1}`,
      name: row.name,
      address: row.address,
      lat: parseFloat(row.latitude),
      lng: parseFloat(row.longitude),
      type: 'hospital'
    };
  });
}

export const hospitals = parseCSV(hospitalsCSV);