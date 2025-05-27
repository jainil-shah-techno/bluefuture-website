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

import { getHeaderData, getEmployersData, getFooterData } from "../lib/api";

export default function Employers({ headerData, footerData, employersData }) {

	const employerHeroSectionData = employersData.employerHeroSection;
	const crewSectionData = employersData.crewSection;


	return (
		<>
			<Layout>

				<Head>
					<title>
						{employersData?.seo.title}
					</title>
					<meta
						property="description"
						content={employersData?.seo.metaDesc}
					/>
					<meta
						property="og:image"
						content={employersData?.featuredImage?.node.sourceUrl}
					/>
				</Head>

				<Header headerData={headerData} />

				<EmployerHeroSection employerHeroSectionData={employerHeroSectionData} />

				<Crew crewSectionData={crewSectionData} />
				
				<Footer footerData={footerData} />

			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {

	const headerData = await getHeaderData();
	const footerData = await getFooterData();
	const employersData = await getEmployersData('employers');

	return {
		props: {
			headerData,
			footerData,
			employersData
		},
		revalidate: 10,
	};
};