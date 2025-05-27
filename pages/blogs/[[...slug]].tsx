import { GetStaticPaths, GetStaticProps } from "next";
import { getHeaderData, getFooterData, getAllPostsWithBlogSettings } from "../../lib/api";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import BlogsLoop from "../../components/blogsLoop";
import Pagination from "../../components/pagination";

export default function Blogs({ headerData, footerData, blogData, currentPage, totalPages }) {

	return (
		
		<Layout>

		<Header headerData={headerData} />

		<BlogsLoop blogData={blogData.edges} />

		<Pagination currentPage={currentPage} total={blogData.total} postsPerPage={5} />

		<Footer footerData={footerData} />

		</Layout>

	);
}


export const getStaticPaths: GetStaticPaths = async () => {
	const allPosts = await getAllPostsWithBlogSettings();
	const totalPages = Math.ceil(allPosts.total / 5); // adjust as needed

	const paths = [];

	for (let i = 1; i <= totalPages; i++) {
		if (i === 1) {
			paths.push({ params: { slug: [] } });
	} else {
			paths.push({ params: { slug: [String(i)] } });
	}
}

return {
		paths,
		fallback: false,
	};
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
	const page = !params?.slug || params.slug.length === 0 ? 1 : parseInt(params.slug[0], 5);
	const offset = (page - 1) * 5;

	const headerData = await getHeaderData();
	const footerData = await getFooterData();
	const blogData = await getAllPostsWithBlogSettings(offset, 5);

	return {
		props: {
			headerData,
			footerData,
			blogData,
			currentPage: page,
			totalPages: Math.ceil(blogData.total / 5),
		},
		revalidate: 10,
	};
};