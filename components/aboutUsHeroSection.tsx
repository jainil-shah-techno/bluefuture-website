import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function AboutUsHeroSection({ aboutUsHeroSectionData }) {	

	return (
		<div className="my-16">
			<div className="mx-auto max-w-[1240px] p-6 rounded-2xl border border-gray-200 shadow-2xl">
				<Wrapper className="bg-dark-blue py-10 text-white rounded-t-2xl">
					<Container className="text-center">
						<h2 className="font-inter text-4xl md:text-6xl font-bold"
							dangerouslySetInnerHTML={{ __html: aboutUsHeroSectionData.aboutSectionHeading }}>
						</h2>
						<p className="mt-4 text-light-gray font-light text-base md:text-xl"
							dangerouslySetInnerHTML={{ __html: aboutUsHeroSectionData.aboutSectionDescription }}>
						</p>
					</Container>
				</Wrapper>

				<Wrapper className="flex justify-center items-center py-6 rounded-b-2xl">
					<div className="relative w-[1120px] h-[320px] overflow-hidden rounded-xl">
						<Image src={aboutUsHeroSectionData.aboutSectionImage?.node.sourceUrl} alt="About Us Hero Section Image" layout="fill" objectFit="cover" />
					</div>
				</Wrapper>
			</div>
		</div>	
	);
}
