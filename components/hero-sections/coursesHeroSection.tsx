import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../design/container";
import Wrapper from "../design/wrapper";

export default function CourseHeroSection({ coursesHeroSectionData }) {
	const sliderImages = coursesHeroSectionData?.courseImagesSlider || [];

	return (
		<>	
			<Wrapper className="bg-dark-blue py-12 text-white">
				<Container className="text-center">
					<h2 className="text-4xl md:text-6xl font-bold"  dangerouslySetInnerHTML={{ __html: coursesHeroSectionData?.courseHeading || "",
						}} />
					<p className="mt-4 text-light-gray font-light text-base md:text-xl max-w-2xl mx-auto">
						{coursesHeroSectionData?.courseDescription}
					</p>
				</Container>
			</Wrapper>

			<Wrapper>
				<div className="relative w-full h-[550px]">
					<Image src={coursesHeroSectionData?.courseHeroSectionImage?.node?.sourceUrl || ""}
						alt="Course Page Hero Section Image" layout="fill" objectFit="cover"
					/>

					<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#000000e0] to-transparent z-10" />

					<div className="mx-8 absolute bottom-10 text-left text-white text-4xl p-4 z-20">
						{coursesHeroSectionData?.heroImageText}
					</div>
				</div>
			</Wrapper>

			<div className="flex gap-4 py-10 justify-center overflow-x-auto">
				{sliderImages.map((item, index) => (
					<Image key={index} src={item?.courseImage?.node?.sourceUrl || ""} 
						height={358} width={350} alt={`Slide ${index + 1}`}
						className="flex-shrink-0"
					/>
				))}
			</div>

			<div className="flex justify-center py-2">
				<Link href={coursesHeroSectionData?.courseHeroLinkUrl || "#"} 
				className="bg-button-gradient rounded-lg text-white px-6 py-4 flex items-center gap-2 text-sm font-bold">
					{coursesHeroSectionData?.courseHeroLinkText}
					<Image src="/images/arrow-right-white.svg" alt="Arrow Right" 
						width={20} height={20} />
				</Link>
			</div>
		</>
	);
}