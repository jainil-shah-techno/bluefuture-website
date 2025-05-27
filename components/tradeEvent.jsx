import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function TradeEvent({ tradeEventSectionData }) {
	const tradeTags = tradeEventSectionData?.tradeEventSlider || [];
	const imageData = tradeEventSectionData?.tradeEventImages || [];
	const popupImage = tradeEventSectionData?.tradeEventPopUpImage?.node || null;

	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const handleClick = (index) => {
		setSelectedImageIndex(selectedImageIndex === index ? null : index);
	};

	return (
		<Wrapper className="py-24 text-white">
			<Container className="max-w-7xl mx-auto px-4">
				<div className="text-center">
					<h2
						className="text-3xl md:text-5xl font-medium"
						dangerouslySetInnerHTML={{ __html: tradeEventSectionData?.tradeEventHeading }}
					/>
					<p className="mt-2 md:mt-4 text-light-gray text-base md:text-xl font-light">
						{tradeEventSectionData?.tradeEventDescription}
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-10 py-8">
					<div className="flex flex-col gap-4 w-full lg:w-auto">
						{imageData.map((item, index) => {
							const image = item?.tradeEventImage?.node;
							if (!image?.sourceUrl) return null;

							return (
								<div key={index}>
									<div onClick={() => handleClick(index)} className={`cursor-pointer border-2 rounded-lg overflow-hidden transition ${ selectedImageIndex === index ? "border-[#FFA500]" : "border-transparent" }`}>
										<Image src={image.sourceUrl} width={596} height={160}
											alt={image.altText || `Trade Event ${index + 1}`}
										/>
									</div>

									{selectedImageIndex === index && popupImage?.sourceUrl && (
										<div className="block lg:hidden mt-4 border-2 border-[#FFA500] rounded-lg overflow-hidden">
											<Image src={popupImage.sourceUrl} width={641}
												height={627} alt={popupImage.altText || "Created Event Details"} />
										</div>
									)}
								</div>
							);
						})}
					</div>

					{popupImage?.sourceUrl && selectedImageIndex !== null && (
						<div className="hidden lg:block border-2 border-[#FFA500] rounded-lg overflow-hidden">
							<Image src={popupImage.sourceUrl} width={641} height={627}
								alt={popupImage.altText || "Created Event Details"}
							/>
						</div>
					)}
				</div>

				<div className="relative w-full overflow-hidden py-6">
					<div className="flex animate-marquee-left gap-3 whitespace-nowrap">
						{[...tradeTags, ...tradeTags].map((item, index) => (
							<span key={`right-${index}`} className="px-6 py-4 rounded-full bg-Trade-Event-slider-bg text-white text-sm shrink-0" >
								{item.tradeEventNames}
							</span>
						))}
					</div>
				</div>

				<div className="flex justify-center mt-8">
					<Link href={tradeEventSectionData?.tradeEventLinkName || "#"}
						className="bg-button-gradient rounded-lg text-white px-6 py-4 flex items-center gap-2 text-sm font-bold" >
						{tradeEventSectionData?.tradeEventLinkName}
						<Image src="/images/arrow-right-white.svg" alt="Arrow Right" width={20} height={20} />
					</Link>
				</div>
			</Container>
		</Wrapper>
	);
}