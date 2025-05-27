import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function DifferenceWeMake({ differenceWeMakeSectionData }) {
	const images = differenceWeMakeSectionData?.differenceWeMakeImages || [];

	return (
		<Wrapper className="dark-blue py-6 overflow-hidden">
			<Container className="px-4 mt-10">	
				<div className="flex flex-col gap-4 text-white justify-center items-center text-center mb-12">
					<h1 className="text-3xl md:text-5xl font-medium">
						{differenceWeMakeSectionData.differenceSectionHeading}
					</h1>
					<p className="text-light-gray text-base md:text-xl">
						{differenceWeMakeSectionData.differenceWeMakeDescription}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{images.map((item, index) => (
						item?.differenceWeMakeImage?.node.sourceUrl && (
							<div
								key={index}
								className={`text-white ${index === 1 || index === 3 ? 'mt-10' : ''}`}
							>
								<Image
									src={item.differenceWeMakeImage?.node.sourceUrl}
									alt={`Difference Image ${index + 1}`}
									width={623}
									height={667}
								/>
							</div>
						)
					))}
				</div>
			</Container>
		</Wrapper>
	);
}