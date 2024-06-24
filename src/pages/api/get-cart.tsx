import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const filePath = path.resolve('data.json');
    
    // Ensure the file exists and handle cases where the file might be empty
    try {
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
      }

      const fileData = fs.readFileSync(filePath, 'utf-8');
      const data = fileData ? JSON.parse(fileData) : [];
      res.status(200).json(data);
    } catch (error) {
      console.error('Error reading or parsing data.json:', error);
      res.status(500).json({ message: 'Error fetching cart data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
