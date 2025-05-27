import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function ClientLogo({ clientLogoSectionData }) {
	const logoList = clientLogoSectionData?.clientLogoSlider || [];

	return (
		<Wrapper className="bg-dark-blue py-16 text-white overflow-hidden">
			<Container className="text-center">
				<div className="flex flex-col gap-10">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight"dangerouslySetInnerHTML={{ __html: clientLogoSectionData.clientLogoSectionHeading }} />

					<div className="relative w-full overflow-hidden">
						<div className="flex gap-10 animate-marquee whitespace-nowrap">
							{[...logoList, ...logoList].map((item, index) => (
								<div key={index} className="w-[120px] sm:w-[140px] md:w-[177px] flex justify-center shrink-0" >
									<Image src={item.clientLogo?.node.sourceUrl} width={177} 
										height={43}  alt={item.clientLogo?.altText || `Client ${index + 1}`} 
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}