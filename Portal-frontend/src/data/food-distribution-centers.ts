// Food Distribution Centers data for San Francisco
import foodCentersCSV from './food-distribution-centers.csv?raw';

interface FoodDistributionCenter {
  id: string;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string | null;
  lat: number;
  lng: number;
  amenities: string[];
  type: string;
  inventory: Record<string, number>;
}

function parseCSV(csvText: string): FoodDistributionCenter[] {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
  
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
    
    const inventory: Record<string, number> = {};
    const inventoryItems = ['peanut butter', 'bananas', 'bottled water', 'granola bars', 'diapers', 'tampons', 'soap', 'instant ramen'];
    
    inventoryItems.forEach(item => {
      inventory[item] = parseInt(row[item]) || 0;
    });
    
    return {
      id: (index + 1).toString(),
      title: row.Name,
      address: row.Address,
      price: 'Free Service',
      bedrooms: 0,
      bathrooms: 0,
      sqft: 0,
      image: null,
      lat: parseFloat(row.Latitude),
      lng: parseFloat(row.Longitude),
      amenities: ['Food Distribution', 'Community Services'],
      type: 'food-center',
      inventory
    };
  });
}

export const foodDistributionCenters = parseCSV(foodCentersCSV);