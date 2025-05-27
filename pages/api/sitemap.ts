import absoluteUrl from 'next-absolute-url'

export default async (req, res) => {
  const { origin } = absoluteUrl(req)
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
        <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
		<loc>${origin}/post-sitemap.xml</loc>
		<lastmod>2023-01-20T10:59:15+00:00</lastmod>
	</sitemap>
	<sitemap>
		<loc>${origin}/page-sitemap.xml</loc>
		<lastmod>2023-01-20T07:24:43+00:00</lastmod>
	</sitemap>
	<sitemap>
		<loc>${origin}/category-sitemap.xml</loc>
		<lastmod>2023-01-20T10:59:15+00:00</lastmod>
	</sitemap>
	<sitemap>
		<loc>${origin}/author-sitemap.xml</loc>
		<lastmod>2022-11-09T09:39:05+00:00</lastmod>
	</sitemap>
      </sitemapindex>
      `);
  } else {
    // Handle any other HTTP method
  }
};
