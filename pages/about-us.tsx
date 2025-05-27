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
import DifferenceWeMake from "../components/difference-we-make";
import AboutUsHeroSection from "../components/aboutUsHeroSection";
import ValuesStory from "../components/valuesStory";
import WhyWeAreDifferent from "../components/whyWeAreDifferent";
import Impact from "../components/impact";

import { getHeaderData, getFooterData, getAboutUsData } from "../lib/api";

export default function AboutUs({ headerData, footerData, aboutData }) {

	const aboutUsHeroSectionData = aboutData.aboutUsHeroSection;
	const valuesSectionData = aboutData.valuesSection;
	const whyAreWeDifferentSectionData = aboutData.whyAreWeDifferentSection;
	const impactSectionData = aboutData.impactSection;


	return (
		<>
			<Layout>
			
				<Head>
	                <title>
	                    {aboutData?.seo.title}
	                </title>
	                <meta
	                    property="description"
	                    content={aboutData?.seo.metaDesc}
	                />
	                <meta
	                    property="og:image"
	                    content={aboutData?.featuredImage?.node.sourceUrl}
	                />
	            </Head>

				<Header headerData={headerData} />

				{/*<AboutUsHeroSection aboutUsHeroSectionData={aboutUsHeroSectionData} />

				<ValuesStory valuesSectionData={valuesSectionData} />*/}

				{/*<WhyWeAreDifferent whyAreWeDifferentSectionData={whyAreWeDifferentSectionData} /> */}

				<Impact impactSectionData={impactSectionData} />

				<Footer footerData={footerData} />

			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {

	const headerData = await getHeaderData();
	const footerData = await getFooterData();
	const aboutData = await getAboutUsData('about-us');

	return {
		props: {
			headerData,
			footerData,
			aboutData
		},
		revalidate: 10,
	};
};