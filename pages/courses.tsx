import Head from "next/head";
import React, { useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Layout from "../components/layout";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";
import InnerPagesFooter from "../components/footer/inner-pages-footer";
import EmployerHeroSection from "../components/employerHeroSection";
import Crew from "../components/crew";
import CoursesHeroSection from "../components/coursesHeroSection";
import EventsHeroSection from "../components/eventsHeroSection";

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