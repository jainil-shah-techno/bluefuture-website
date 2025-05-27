import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function HomeHeroSection({ heroSectionData }) {

	return (
		<>	
			<Wrapper className="bg-dark-blue py-12 text-white">
				<Container className="text-center">
					<h2 className="font-inter text-3xl md:text-6xl font-bold" 
						dangerouslySetInnerHTML={{ __html: heroSectionData.sectionHeading }} /> 
					<p className="mt-4 text-light-gray font-light max-w-2xl mx-auto text-base md:text-xl">
						{heroSectionData.sectionDescription}
					</p>
					<div className="mt-6 flex justify-center space-x-4">
						<Link href={heroSectionData.link1Url} className="bg-transparent border border-1 rounded-lg text-white px-6 py-4 font-bold">{heroSectionData.link1Text}
						</Link>
						<Link href={heroSectionData.link2Url} className="bg-button-gradient rounded-lg text-white px-6 py-4 rounded-lg flex items-center gap-2 text-sm">{heroSectionData.link2Text}
							<Image src="/images/arrow-right-white.svg" alt="Arrow Right" width={20}
							    height={20} />
						</Link>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className="relative py-6">
				<div className="relative w-full h-[400px] md:h-[600px]">
				    <Image src={heroSectionData.heroImage?.node.sourceUrl} alt="Home Banner/Hero Section Image" layout="fill"
				      objectFit="cover" />

				    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#000000e0] to-transparent z-10" />

				    <div className="mx-4 md:mx-8 absolute bottom-10 text-left text-white text-2xl md:text-4xl p-4 z-20">
				      	{heroSectionData.imageText}
				    </div>
				</div>
			</Wrapper>		
		</>
	);
}