import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const filePath = path.resolve('data.json');
    
    // Ensure the file exists and handle cases where the file might be empty
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }

    let data;

    try {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      data = fileData ? JSON.parse(fileData) : [];
    } catch (error) {
      console.error('Error reading or parsing data.json:', error);
      data = [];
    }

    const newProduct = req.body;
    data.push(newProduct);

    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      res.status(200).json({ message: 'Product added to cart', product: newProduct });
    } catch (error) {
      console.error('Error writing to data.json:', error);
      res.status(500).json({ message: 'Error saving product to cart' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
