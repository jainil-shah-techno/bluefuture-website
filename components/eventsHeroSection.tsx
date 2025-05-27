import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function EventsHeroSection({ eventsHeroSectionData }) {

	return (
		<>	
			<Wrapper className="bg-dark-blue py-12 text-white">
				<Container className="text-center">
					<h2 className="text-4xl md:text-6xl font-bold"
						dangerouslySetInnerHTML={{ __html: eventsHeroSectionData.eventsHeading }}>
					</h2>
					<p className="mt-4 text-light-gray font-light max-w-2xl mx-auto">
						{eventsHeroSectionData.eventDescription}
					</p>
					<div className="mt-6 flex justify-center space-x-4">
						<Link href={eventsHeroSectionData.eventLinkUrl} className="bg-button-gradient rounded-lg text-white px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
							  {eventsHeroSectionData.eventLinkText}
							<Image src="/images/arrow-right-white.svg" alt="Arrow Right" width={20}
							    height={20} />
						</Link>
					</div>
				</Container>
			</Wrapper>

			<Wrapper>
				<div className="relative w-full h-[300px] md:h-[700px]">
					<Image src={eventsHeroSectionData.eventHeroSectionImage?.node.sourceUrl} alt="Events Hero Section Image" fill className="object-cover" />

					<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#000000e0] to-transparent z-10" />

					<div className="mx-4 md:mx-8 absolute bottom-6 md:bottom-10 text-left text-white text-2xl md:text-4xl p-2 md:p-4 z-20">
						    {eventsHeroSectionData.heroSectionImageText}
					</div>
				</div>
			</Wrapper>
		
		</>
	);
}