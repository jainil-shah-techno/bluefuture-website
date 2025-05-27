import { useState } from "react";
import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Link from "next/link";

export default function HomeCareer({ homeCareerSectionData }) {
	const careerTags = homeCareerSectionData?.careerSectionServiceSlider || [];
	const careerImages = homeCareerSectionData?.careerSectionImages || [];
	const popupImage = homeCareerSectionData?.careerPopUpImage?.node || null;

	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const handleImageClick = (index) => {
		setSelectedImageIndex(selectedImageIndex === index ? null : index);
	};

	return (
		<Wrapper className="py-16 text-white bg-career-bg">
			<Container className="max-w-7xl mx-auto px-4">
				<div className="text-center">
					<h2 className="text-2xl md:text-5xl font-medium leading-tight"dangerouslySetInnerHTML={{ __html: homeCareerSectionData.careerSectionHeading,
					}} />
					<p className="text-base md:text-xl md:mt-2 mt-4 text-light-gray">
						{homeCareerSectionData.careerSectionDescription}
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-10 py-8">
					{/* Image Thumbnails */}
					<div className="flex flex-col gap-4 w-full lg:w-auto">
						{careerImages.map((imgItem, index) => {
							const img = imgItem?.careerSectionImage?.node;
							if (!img?.sourceUrl) return null;

							return (
								<div key={index}>
									<div onClick={() => handleImageClick(index)} className={`cursor-pointer border-2 rounded-lg transition ${ selectedImageIndex === index ? "border-[#FFA500]"
												: "border-transparent" }`}>
										<Image src={img.sourceUrl} width={404} height={418}
											alt={img.altText || `Career Image ${index + 1}`}
										/>
									</div>

									{selectedImageIndex === index && popupImage?.sourceUrl && (
										<div className="block lg:hidden mt-4 border-2 border-[#FFA500] rounded-lg">
											<Image src={popupImage.sourceUrl} width={828}
												height={1249} alt={popupImage.altText || "Career Section Pop-Up Image"} />
										</div>
									)}
								</div>
							);
						})}
					</div>

					{/* Desktop Popup Image */}
					{selectedImageIndex !== null && popupImage?.sourceUrl && (
						<div className="hidden lg:block border-2 border-[#FFA500] rounded-lg">
							<Image src={popupImage.sourceUrl} width={828} height={1249}
								alt={popupImage.altText || "Career Section Pop-Up Image"}
							/>
						</div>
					)}
				</div>

				<div className="relative w-full overflow-hidden py-8">
					<div className="flex animate-marquee-left gap-3 whitespace-nowrap">
						{[...careerTags, ...careerTags].map((item, index) => (
							<span key={`right-${index}`} className="px-6 py-4 rounded-full
								bg-Trade-Event-slider-bg text-white text-sm shrink-0 border
								border-blue-500">{item.careerSectionServiceName} 
							</span>
						))}
					</div>
				</div>

				<div className="flex justify-center mt-10 mb-20">
					<Link href={homeCareerSectionData.careerLinkUrl} className="bg-button-gradient rounded-lg text-white px-6 py-4 flex items-center gap-2 text-sm font-bold" >
						{homeCareerSectionData.careerLinkText}
						<Image src="/images/arrow-right-white.svg" alt="Arrow Right" width={20}
							height={20} />
					</Link>
				</div>
			</Container>
		</Wrapper>
	);
}