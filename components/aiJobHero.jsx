import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function AIJobHero({ aiJobHeroSectionData }) {
	const serviceTags = aiJobHeroSectionData?.aiJobServiceSlider || [];
	const imageData = aiJobHeroSectionData?.aiSectionImages || [];
	const popupImage = aiJobHeroSectionData?.aiSectionPopUpImage?.node || null;

	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const handleClick = (index) => {
		setSelectedImageIndex(selectedImageIndex === index ? null : index);
	};

	return (
		<Wrapper className="text-white">
			<Container className="max-w-7xl mx-auto px-4 mt-10">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug md:leading-tight" dangerouslySetInnerHTML={{	__html: aiJobHeroSectionData.aiSectionHeading }}  />
					<div className="mt-4 text-sm sm:text-base text-light-gray max-w-xl mx-auto">
						{aiJobHeroSectionData.aiSectionDescription}
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-10 mt-10">
					<div className="flex flex-col gap-4 w-full md:w-auto">
						{imageData.map((imgItem, index) => {
							const img = imgItem.aiSectionImage?.node;
							if (!img?.sourceUrl) return null;

							return (
								<div key={index}>
									<div onClick={() => handleClick(index)} 
										className={`cursor-pointer transition border-2 ${
										selectedImageIndex === index ? "border-[#FFA500]" : "border-transparent" }`} >
										<Image src={img.sourceUrl} width={404}
											height={418} alt={img.altText || "AI Job Section Image"}
										/>
									</div>

									{selectedImageIndex === index && popupImage?.sourceUrl && (
										<div className="mt-4 md:hidden border-2 border-[#FFA500] inline-block shadow-2xl w-full">
											<Image src={popupImage.sourceUrl} width={828}
												height={1318}  alt={popupImage.altText || "Pop-up image"} className="w-full h-auto" />
										</div>
									)}
								</div>
							);
						})}
					</div>

					<div className="hidden md:block">
						{popupImage?.sourceUrl && selectedImageIndex !== null && (
							<div className="border-2 border-[#FFA500] inline-block shadow-2xl">
								<Image src={popupImage.sourceUrl} width={828} height={1318}
									alt={popupImage.altText || "Pop-up image"} />
							</div>
						)}
					</div>
				</div>

				<div className="relative w-full overflow-hidden py-8">
					<div className="flex animate-marquee-left gap-3 whitespace-nowrap">
						{[...serviceTags, ...serviceTags].map((item, index) => (
							<span key={`right-${index}`} className="px-6 py-4 rounded-full bg-Trade-Event-slider-bg text-white text-sm shrink-0 border border-blue-500">
								{item.aiJobServiceName}
							</span>
						))}
					</div>
				</div>

				<div className="flex justify-center mt-10 mb-20">
					<Link href={aiJobHeroSectionData.aiLinkUrl} className="bg-button-gradient rounded-lg text-white px-6 py-4 flex items-center gap-2 text-sm font-bold" >
						{aiJobHeroSectionData.aiLinkText}
						<Image src="/images/arrow-right-white.svg" alt="Arrow Right" 
							width={20} height={20} />
					</Link>
				</div>
			</Container>
		</Wrapper>
	);
}