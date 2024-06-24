import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const updatedCart = req.body;
    const filePath = path.resolve('data.json');

    try {
      fs.writeFileSync(filePath, JSON.stringify(updatedCart, null, 2));
      res.status(200).json({ message: 'Cart updated successfully' });
    } catch (error) {
      console.error('Error updating cart:', error);
      res.status(500).json({ message: 'Error updating cart' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
