import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";


export default function EmployerHeroSection({ employerHeroSectionData }) {
	const serviceTags = employerHeroSectionData?.heroSectionServiceSlider || [];

	return (
		<>	
			<Wrapper className="bg-dark-blue py-12 text-white">
				<Container className="text-center">
					<h2 className="text-5xl md:text-6xl font-bold leading-tight"dangerouslySetInnerHTML={{ __html: employerHeroSectionData.title }} />					
					<div className="mt-4 text-light-gray font-light text-base md:text-xl"
						dangerouslySetInnerHTML={{ __html: employerHeroSectionData.description }}>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className="relative">
				<div className="relative w-full h-[500px] md:h-[720px]">
					<Image src={employerHeroSectionData.heroImage?.node.sourceUrl} alt="Employer Hero Section Image" layout="fill" objectFit="cover" />

					<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#000000e0] to-transparent z-10" />

					<div className="mx-8 absolute bottom-10 text-white text-2xl md:text-4xl p-4 z-20">
					  {employerHeroSectionData.heroImageText}
					</div>
				</div>
			</Wrapper>

			<div className="py-10 space-y-4 text-white">
					<div className="relative w-full overflow-hidden">
						<div className="flex animate-marquee-right gap-3 whitespace-nowrap">
							{[...serviceTags, ...serviceTags].map((item, index) => (
								<span key={`right-${index}`} className="px-4 py-2 rounded-full border border-blue-500 text-sm shrink-0">
									{item.heroSectionServiceName}
								</span>
							))}
						</div>
					</div>

					<div className="relative w-full overflow-hidden">
						<div className="flex animate-marquee-left gap-3 whitespace-nowrap">
							{[...serviceTags, ...serviceTags].map((item, index) => (
								<span
									key={`left-${index}`}
									className="px-4 py-2 rounded-full border border-blue-500 text-sm shrink-0"
								>
									{item.heroSectionServiceName}
								</span>
							))}
						</div>
					</div>
				</div>

			<div className="flex justify-center mb-10">
				<Link href={employerHeroSectionData.heroSectionLinkUrl} className="bg-button-gradient rounded-lg text-white px-6 py-4 flex items-center gap-2 text-sm font-bold">
					{employerHeroSectionData.heroSectionLinkText}
					<Image src="/images/arrow-right-white.svg" alt="Arrow Right" width={20} height={20} />
				</Link>
			</div>
		</>
	);
}