import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { secret, path } = req.query

	// Validate secret token
	if (secret !== process.env.REVALIDATE_SECRET) {
	return res.status(401).json({ message: 'Invalid token' })
	}

	try {
	const pathsToRevalidate: string[] = []

	javascript
	Copy
	Edit
	// If a specific path is provided, use it; otherwise, revalidate the homepage
	if (typeof path === 'string') {
	  pathsToRevalidate.push(path)
	} else {
	  pathsToRevalidate.push('/')
	}

	// Revalidate each path
	for (const p of pathsToRevalidate) {
	  console.log(`Revalidating path: ${p}`)
	  await res.revalidate(p)
	}

	return res.json({ revalidated: true, paths: pathsToRevalidate })
	} catch (err: any) {
	console.error('Revalidation error:', err)
	return res.status(500).json({
	message: 'Error revalidating',
	error: err.message || err.toString(),
	})
	}
}