import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../design/container";
import Wrapper from "../design/wrapper";

export default function TestimonialSection({ testimonialSectionData }) {

	return (
		<>
			<Wrapper className="py-16 text-white">
				<Container className="mx-auto px-6">
					<div className="flex flex-col lg:flex-row items-stretch justify-between border border-Testimonial-Border rounded-lg p-10 gap-10">
							<div className="flex flex-col justify-center items-center md:items-start max-w-md">
								<h3 className="text-3xl font-semibold text-white leading-tight">
								  	{testimonialSectionData.testimonialSectionHeading}
								</h3>
								<h2 className="text-3xl font-semibold bg-yellow-gradient bg-clip-text text-transparent mt-2 leading-tight">
								  	{testimonialSectionData.testimonialSectionHeading2}
								</h2>
								<p className="text-center md:text-left text-light-gray mt-4 text-base">
								  	{testimonialSectionData.testimonialSectionDescription}
								</p>
								<div className="mt-6">
									<Link href={testimonialSectionData.testimonialLinkUrl} className="flex items-center gap-2 bg-button-gradient text-white px-6 py-3 rounded-md text-sm font-bold">
										{testimonialSectionData.testimonialLinkText}
										<Image src="/images/arrow-right-white.svg" alt="Arrow Right" width={20} height={20} />
									</Link>
								</div>
							</div>

						<div className="bg-[#13172A] rounded-xl p-8 flex flex-col items-center max-w-md shadow-md">
							<Image src={testimonialSectionData.customerImage?.node.sourceUrl} alt="Testimonial Image 1" 
								className="rounded-md mb-4" width={473} height={315} />
							<div className="text-center text-white text-xl mb-4 leading-relaxed"
								dangerouslySetInnerHTML={{ __html: testimonialSectionData.customReview }}>
							</div>
							<div className="text-sm text-white mb-2">
							  	{testimonialSectionData.customerName}
							</div>
							<Image src="/images/stars.svg" width={120} height={20} alt="Stars" className="mb-2" />
							<Image src="/images/pagination.svg" width={50} height={6} 
								alt="Pagination" />
						</div>
					</div>
				</Container>
			</Wrapper>

		</>
	);
}