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
import HomeHeroSection from "../components/homeHeroSection";
import HomeOfTradeService from "../components/homeOfTradeService";
import ClientLogo from "../components/clientLogo";
import TestimonialSection from "../components/testimonialSection";
import JoinCommunity from "../components/joinCommunity";
import AIJobHero from "../components/aiJobHero";
import HomeCareer from "../components/homeCareer";
import TradeEvent from "../components/tradeEvent";
import TalentSection from "../components/talentSection";
import SkilledTradesSection from "../components/skilledTradesSection";

import { getHeaderData, getFooterData, getHomeData } from "../lib/api";

export default function Index({ headerData, footerData, homeData }) {

	const heroSectionData = homeData.homeHeroSection;
	const homeOfTradesServicesData = homeData.homeOfTradesServices;
	const clientLogoSectionData = homeData.clientLogoSection;
	const aiJobHeroSectionData = homeData.aiJob;
	const tradeEventSectionData = homeData.tradeEventSection;
	const homeCareerSectionData = homeData.homeCareerSection;
	const communitySectionData = homeData.communitySection;
	const testimonialSectionData = homeData.testimonialSection;

	return (
		<>
			<Layout>

				<Head>
					<title>
						{homeData?.seo.title}
					</title>
					<meta
						property="description"
						content={homeData?.seo.metaDesc}
					/>
					<meta
						property="og:image"
						content={homeData?.featuredImage?.node.sourceUrl}
					/>
				</Head>

				<Header headerData={headerData} />
				
				<HomeHeroSection heroSectionData={heroSectionData} />

				<HomeOfTradeService homeOfTradesServicesData={homeOfTradesServicesData}  />

				<ClientLogo clientLogoSectionData={clientLogoSectionData} />

				<AIJobHero aiJobHeroSectionData={aiJobHeroSectionData} />

				<TalentSection />

				<TradeEvent tradeEventSectionData={tradeEventSectionData} />

				<HomeCareer homeCareerSectionData={homeCareerSectionData} />

				<JoinCommunity communitySectionData={communitySectionData} />

				<TestimonialSection testimonialSectionData={testimonialSectionData} />

				<Footer footerData={footerData} />

			</Layout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {

	const headerData = await getHeaderData();
	const footerData = await getFooterData();
	const homeData = await getHomeData('home'); 

	return {
		props: {
			headerData,
			footerData,
			homeData
		},
		revalidate: 10,
	};
};