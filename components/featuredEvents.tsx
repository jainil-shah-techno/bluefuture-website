import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function FeaturedEvents({ featuredEventsSectionData }) {
	const eventTags = featuredEventsSectionData?.featuredEventsSlider || [];
	const eventsGrid = featuredEventsSectionData?.eventsGrid || [];

	return (
		<Wrapper className="career-bg text-white py-24">
			<Container className="">
				<div className="flex justify-center items-center text-white">
					<h2 className="bg-yellow-gradient bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-medium text-center">
						{featuredEventsSectionData.heading}
					</h2>
				</div>

				<div className="flex flex-wrap justify-center gap-4 md:gap-6 py-10">
					{eventsGrid.map((event, index) => (
						<div key={index} className="flex flex-col gap-2 justify-center items-center border rounded-lg px-10 sm:px-14 md:px-32 py-4 bg-featured-events">
							{event?.eventImage?.node?.sourceUrl && (
								<Image src={event.eventImage.node.sourceUrl} width={46}
								height={46} alt={event.eventName || "Event Icon"} />
							)}
							<h4 className="text-sm sm:text-base text-white">{event.eventName}</h4>
						</div>
					))}
				</div>

				<div className="relative w-full overflow-hidden mt-10">
					<div className="flex animate-marquee-left gap-3 whitespace-nowrap">
						{[...eventTags, ...eventTags].map((item, index) => (
							<span key={`tag-${index}`} className="px-4 sm:px-6 py-2 sm:py-4 rounded-full bg-Trade-Event-slider-bg text-white text-xs sm:text-sm shrink-0">
								{item.featuredEventName}
							</span>
						))}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}