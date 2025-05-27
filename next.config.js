if (!process.env.WORDPRESS_API_URL) {
	throw new Error(`
		Please provide a valid WordPress instance URL.
		Add to your environment variables WORDPRESS_API_URL.
	`)
}

module.exports = async (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		/* config options here */
		webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
			config.optimization.splitChunks.cacheGroups = { }
			config.optimization.minimize = true;
			return config
		},
		images: {
		    domains: ['localhost', '192.168.0.180'],
		    unoptimized: true
		},
	}
	return nextConfig
}
