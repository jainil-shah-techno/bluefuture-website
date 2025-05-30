import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import {
	getAllPostsWithBlogSettings,
	getSinglePostBySlug,
	getHeaderData,
	getFooterData
} from "../lib/api";
import Layout from "../components/design/layout";
import Header from "../components/header";
import Footer from "../components/footer/footer";
import SingleBlogHeroSection from "../components/hero-sections/singleBlogHeroSection";
import SingleBlogContent from "../components/blogs-section/singleBlogContent";

interface Props {
	post: any;
	headerData: any;
	footerData: any;
}

interface Params extends ParsedUrlQuery {
	slug: string;
}

export default function BlogPostPage({ post, headerData, footerData }: Props) {

	return (
		<Layout>

			<Header headerData={headerData} />

			<SingleBlogHeroSection post={post} />

			<SingleBlogContent post={post} />

			<Footer footerData={footerData} />
			
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllPostsWithBlogSettings();

	const paths = posts.edges.map(({ node }) => ({
		params: { slug: node.slug }
	}));

	return {
		paths,
		fallback: 'blocking', // use 'blocking' if you expect new posts after build
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	if (!params?.slug) {
		return {
			notFound: true
		};
	}

	const post = await getSinglePostBySlug(params.slug);
	const headerData = await getHeaderData();
	const footerData = await getFooterData();

	if (!post) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			post,
			headerData,
			footerData
		},
		revalidate: 10
	};
};