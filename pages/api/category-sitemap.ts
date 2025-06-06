import absoluteUrl from 'next-absolute-url'

export default async (req, res) => {
    const { origin } = absoluteUrl(req)
	if (req.method === 'GET') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/xml')
        res.send(`<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
		<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<url>
				<loc>${origin}/category/uncategorized/</loc>
				<lastmod>2023-01-20T10:42:15+00:00</lastmod>
			</url>
			<url>
				<loc>${origin}/category/workshop-software/</loc>
				<lastmod>2023-01-20T10:59:15+00:00</lastmod>
			</url>
		</urlset>
      `)


      } else {
        // Handle any other HTTP method
      }
  }