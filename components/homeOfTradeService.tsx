import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function HomeOfTradeService({ homeOfTradesServicesData }) {
	const serviceTags = homeOfTradesServicesData?.servicesSlider || [];

	return (
		<Wrapper className="py-20 text-white overflow-hidden">
			<Container className="text-center">
				<div className="flex flex-col gap-2">
					<h2 className="text-3xl md:text-5xl font-medium">
						{homeOfTradesServicesData.tradeSectionHeading}
					</h2>
					<p className="mt-2 md:text-sm text-base text-light-gray font-light">
						{homeOfTradesServicesData.tradeSectionDescription}
					</p>
				</div>

				<div className="pt-10 space-y-4">
					<div className="relative w-full">
						<div className="flex animate-marquee-right gap-3 whitespace-nowrap">
							{[...serviceTags, ...serviceTags].map((item, index) => (
								<span key={`right-${index}`} className="px-4 py-2 rounded-full border border-blue-500 text-sm shrink-0">
									{item.serviceName}
								</span>
							))}
						</div>
					</div>

					{/* Left-to-right marquee */}
					<div className="relative w-full overflow-hidden">
						<div className="flex animate-marquee-left gap-3 whitespace-nowrap">
							{[...serviceTags, ...serviceTags].map((item, index) => (
								<span
									key={`left-${index}`}
									className="px-4 py-2 rounded-full border border-blue-500 text-sm shrink-0"
								>
									{item.serviceName}
								</span>
							))}
						</div>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}