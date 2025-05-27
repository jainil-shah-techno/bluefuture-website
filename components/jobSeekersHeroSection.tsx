import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Link from "next/link";

export default function JobSeekersHeroSection({ jobSeekersHeroSectionData }) {
	const imageSources = jobSeekersHeroSectionData?.heroSectionImages || [];

	return (
		<Wrapper className="dark-blue">
			<Container className="px-4 mt-10">
				<div className="flex flex-col gap-3 text-white justify-center items-center text-center">
					<h1 className="text-4xl md:text-6xl font-medium" 
						dangerouslySetInnerHTML={{ __html: jobSeekersHeroSectionData.heroSectionHeading }}>
					</h1>

					<p className="text-light-gray font-light text-base md:text-lg"
						dangerouslySetInnerHTML={{ __html: jobSeekersHeroSectionData.heroSectionDescription }}>
					</p>
				</div>

				<div className="flex gap-4 py-10 justify-center overflow-x-auto">
					{imageSources.map((image, index) => (
						image?.heroSectionImage?.node.sourceUrl && (
							<Image key={index} src={image.heroSectionImage?.node.sourceUrl}
							height={318} width={225} alt={`Slide ${index + 1}`} 
							className="flex-shrink-0"
							/>
						)
					))}
				</div>

				<div className="flex justify-center py-6">
					<Link href={jobSeekersHeroSectionData.heroSectionLinkUrl} 
						className="bg-button-gradient rounded-lg text-white px-6 py-4 flex items-center gap-2 text-sm font-bold">
						{jobSeekersHeroSectionData.heroSectionLinkText}
						<Image src="/images/arrow-right-white.svg" alt="Arrow Right" width={20} height={20} />
					</Link>
				</div>
			</Container>
		</Wrapper>
	);
}