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
import JobSeekersHeroSection from "../components/jobSeekersHeroSection";
import Profile from "../components/profile";
import FAQs from "../components/faqs";
import DifferenceWeMake from "../components/difference-we-make";
import HowItWorks from "../components/howItWorks";

import { getHeaderData, getFooterData, getJobSeekersData } from "../lib/api";

export default function JobSeekers({ headerData, footerData, jobSeekersData }) {

	const jobSeekersHeroSectionData = jobSeekersData.jobSeekersHeroSection;
	const differenceWeMakeSectionData = jobSeekersData.differenceWeMakeSection;
	const howItWorksSectionData = jobSeekersData.howItWorksSection;
	const createProfileSectionData = jobSeekersData.createProfileSection;
	const faqsSectionData = jobSeekersData.faqsSection;

	return (
		<>
			<Layout>

				<Head>
	                <title>
	                    {jobSeekersData?.seo.title}
	                </title>
	                <meta
	                    property="description"
	                    content={jobSeekersData?.seo.metaDesc}
	                />
	                <meta
	                    property="og:image"
	                    content={jobSeekersData?.featuredImage?.node.sourceUrl}
	                />
	            </Head>

				<Header headerData={headerData} />

				<JobSeekersHeroSection jobSeekersHeroSectionData={jobSeekersHeroSectionData} />

				<DifferenceWeMake differenceWeMakeSectionData={differenceWeMakeSectionData} />

				<HowItWorks howItWorksSectionData={howItWorksSectionData} />

				<Profile createProfileSectionData={createProfileSectionData} />

				<FAQs faqsSectionData={faqsSectionData} />

				<Footer footerData={footerData} />

			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {

	const headerData = await getHeaderData();
	const footerData = await getFooterData();
	const jobSeekersData = await getJobSeekersData('job-seekers');

	return {
		props: {
			headerData,
			footerData,
			jobSeekersData
		},
		revalidate: 10,
	};
};