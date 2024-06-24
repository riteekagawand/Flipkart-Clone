import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

const saveFormData = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const formData = req.body;

    try {
      // Write form data to form.json file
      const filePath = path.join(process.cwd(), 'form.json');
      await fs.writeFile(filePath, JSON.stringify(formData, null, 2));

      console.log('Form data saved successfully.');

      // Respond with success message or any other data if needed
      res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Failed to save form data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default saveFormData;
