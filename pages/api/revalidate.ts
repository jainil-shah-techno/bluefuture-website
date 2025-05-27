import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// check secret token (set this in Vercel env vars)
	if (req.query.secret !== process.env.REVALIDATE_SECRET) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	try {
		// revalidate the homepage
		await res.revalidate('/');

		// optionally: revalidate dynamic routes (like /blog/my-post)
		if (req.query.path) {
			await res.revalidate(req.query.path as string);
		}

		return res.json({ revalidated: true });
	} catch (err: any) {
		console.error(err);
		return res.status(500).json({ message: 'Error revalidating' });
	}
}