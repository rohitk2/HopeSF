// Neighborhood data for San Francisco
import neighborhoodsCSV from './neighborhoods.csv?raw';

export interface Neighborhood {
  name: string;
  bounds: [[number, number], [number, number]]; // [[south, west], [north, east]]
  color: string;
}

function parseCSV(csvText: string): Neighborhood[] {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map((line) => {
    const values = line.split(',');
    const row: Record<string, string> = {};
    
    headers.forEach((header, i) => {
      row[header] = values[i] || '';
    });
    
    return {
      name: row.name,
      bounds: [
        [parseFloat(row.south_lat), parseFloat(row.west_lng)],
        [parseFloat(row.north_lat), parseFloat(row.east_lng)]
      ] as [[number, number], [number, number]],
      color: row.color
    };
  });
}

export const neighborhoods: Neighborhood[] = parseCSV(neighborhoodsCSV);