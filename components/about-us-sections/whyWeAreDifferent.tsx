import Image from "next/image";
import Container from "../design/container";
import Wrapper from "../design/wrapper";

export default function WhyWeAreDifferent({ whyAreWeDifferentSectionData }) {
	const cards = whyAreWeDifferentSectionData?.whyDifferentSlider || [];

	return (
		<Wrapper className="bg-dark-blue text-white py-16 overflow-hidden">
			<Container className="">
				<div className="flex flex-col justify-center items-center gap-6 text-center mb-12">
					<h2 className="font-inter text-4xl md:text-5xl font-bold" dangerouslySetInnerHTML={{ __html: whyAreWeDifferentSectionData.sectionHeading, }}
					/>
					<div className="text-lg md:text-xl text-light-gray" dangerouslySetInnerHTML={{ __html: whyAreWeDifferentSectionData.sectionDescription, }} />
				</div>

				<div className="relative w-full overflow-hidden">
					<div className="flex w-max animate-marquee gap-6">
						{[...cards, ...cards].map((item, index) => (
							<div key={index} className="relative w-80 min-w-[320px] h-72 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
								<Image src={item.itemImage?.node.sourceUrl} alt={item.itemTitle}
									layout="fill" objectFit="cover" className="rounded-xl"
								/>

								<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#000000e0] to-transparent z-10 rounded-b-xl" />
								<div className="absolute bottom-4 left-4 z-20">
									<p className="text-white text-xl md:text-2xl font-semibold">
										{item.itemTitle}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}