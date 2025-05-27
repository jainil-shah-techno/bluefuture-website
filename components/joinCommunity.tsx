import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function JoinCommunity({ communitySectionData }) {


	return (
		<>
			<Wrapper className="py-24 text-white">
				<Container className="">
					<div className="flex flex-col md:flex-row justify-between">
						<div className="flex flex-col gap-1 md:gap-2">
							<h2 className="text-center md:text-left text-white text-3xl md:text-5xl font-semibold leading-tight" dangerouslySetInnerHTML={{ __html: communitySectionData.communitySectionHeading }}>
							</h2>
							<p className="text-center md:text-left text-light-gray text-sm mt-2"dangerouslySetInnerHTML={{ __html: communitySectionData.communitySectionDescription }}>
							</p>
						</div>

						<div className="flex md:block flex-shrink-0 pt-4 md:pt-0 justify-center items-center">
							<Link href={communitySectionData.communityLinkUrl} className="bg-button-gradient text-white px-5 py-3 rounded-md text-sm flex items-center gap-2">
									{communitySectionData.communityLinkSectionText}
								<Image src="/images/arrow-right-white.svg" alt="Arrow Right" 
									width={20} height={20} />
							</Link>
						</div>
					</div>

					<div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-16">
						<div className="border border-community-border rounded-xl p-6 items-center">
							<h3 className="text-lg font-semibold mb-4">
								{communitySectionData.communityImage1Heading}
							</h3>
							<Image src={communitySectionData.communityImage1?.node.sourceUrl} width={444} height={716} alt="Join Community Section Image 1" />
						</div>


						<div className="flex flex-col gap-10">
							<div className="rounded-xl p-6 border border-community-border">
								<h3 className="text-lg font-semibold mb-4">{communitySectionData.communityImage2Heading}</h3>
								<Image src={communitySectionData.communityImage2?.node.sourceUrl} width={650} height={278} 
									alt="Join Community Section Image 2" />
							</div>

							<div className="border border-community-border rounded-xl p-6 text-left">
								<h3 className="text-lg font-semibold mb-4">{communitySectionData.communityImage3Heading}</h3>
								<div className="flex justify-center items-center">
									<Image src={communitySectionData.communityImage3?.node.sourceUrl} width={295} height={274} 
										alt="Join Community Section Image 3" />
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>
		</>
	);
}