import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // Revalidate homepage by default
    await res.revalidate('/');

    // Optionally revalidate a specific path if passed
    if (req.query.path) {
      await res.revalidate(req.query.path as string);
    }

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating', error: err });
  }
}