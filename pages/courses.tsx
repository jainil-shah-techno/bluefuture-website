import Head from "next/head";
import React, { useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/design/layout";
import Container from "../components/design/container";
import Wrapper from "../components/design/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";
import InnerPagesFooter from "../components/footer/inner-pages-footer";
import Crew from "../components/repeated-sections/crew";
import CoursesHeroSection from "../components/hero-sections/coursesHeroSection";

import { getHeaderData, getFooterData, getCoursesData } from "../lib/api";

export default function Courses({ headerData, footerData, coursesData }) {

	const coursesHeroSectionData = coursesData.coursesHeroSection;


	return (
		<>
			<Layout>
				
				<Head>
					<title>
						{coursesData?.seo.title}
					</title>
					<meta
						property="description"
						content={coursesData?.seo.metaDesc}
					/>
					<meta
						property="og:image"
						content={coursesData?.featuredImage?.node.sourceUrl}
					/>
				</Head>

				<Header headerData={headerData} />

				<CoursesHeroSection coursesHeroSectionData={coursesHeroSectionData} />				
				
				<Footer footerData={footerData} />

			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {

	const headerData = await getHeaderData();
	const footerData = await getFooterData();
	const coursesData = await getCoursesData('courses');

	return {
		props: {
			headerData,
			footerData,
			coursesData
		},
		revalidate: 10,
	};
};