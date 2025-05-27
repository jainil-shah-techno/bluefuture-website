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
import EventsHeroSection from "../components/eventsHeroSection";
import FeaturedEvents from "../components/featuredEvents";

import { getHeaderData, getFooterData, getEventsData } from "../lib/api";

export default function Events({ headerData, footerData, eventsData }) {

	const eventsHeroSectionData = eventsData.eventsHeroSection;
	const featuredEventsSectionData = eventsData.featuredEvents;

	return (
		<>
			<Layout>

				<Head>
					<title>
						{eventsData?.seo.title}
					</title>
					<meta
						property="description"
						content={eventsData?.seo.metaDesc}
					/>
					<meta
						property="og:image"
						content={eventsData?.featuredImage?.node.sourceUrl}
					/>
				</Head>

				<Header headerData={headerData} />

				<EventsHeroSection eventsHeroSectionData={eventsHeroSectionData} />

				<FeaturedEvents featuredEventsSectionData={featuredEventsSectionData} />

				<Footer footerData={footerData} />

			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {

	const headerData = await getHeaderData();
	const footerData = await getFooterData();
	const eventsData = await getEventsData('events');

	return {
		props: {
			headerData,
			footerData,
			eventsData
		},
		revalidate: 10,
	};
};