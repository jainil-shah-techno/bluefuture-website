import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function valuesStory({ valuesSectionData }) {

	return (
		
		<Wrapper className="bg-dark-blue text-white py-16">
			<Container className="">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="border border-[#FFA500] rounded-xl p-6 h-full">
					  <h2 className="font-inter text-5xl font-bold mb-4" 
					  	dangerouslySetInnerHTML={{ __html: valuesSectionData?.storyHeading }} />
					  
					  <p className="text-base font-semibold text-white mb-4">
					    {valuesSectionData?.storySubheading}
					  </p>

					  {(valuesSectionData?.storyContents || []).map((item, index) => (
					    <p key={index} className="text-text-2xl text-light-gray mb-4">
					      {item.storySingleContent}
					    </p>
					  ))}
					</div>


					<div className="flex flex-col gap-6">
						<div className="border border-[#FFA500] rounded-xl p-6">
							<h2 className="font-inter text-5xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: valuesSectionData.visionHeading }} />
							<p className="text-base font-semibold text-white mb-4">
								{valuesSectionData.visionSubheading}
							</p>
							{valuesSectionData.visionContent?.map((item, index) => (
							    <p key={index} className="text-base text-light-gray mb-4">
							      {item.visionSingleContent}
							    </p>
							))}
						</div>

						<div className="border border-[#FFA500] rounded-xl p-6">
							<h2 className="font-inter text-5xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: valuesSectionData.missionHeading }} />
							<p className="text-base font-semibold text-white mb-4"
								dangerouslySetInnerHTML={{ __html: valuesSectionData.missionSubheading }}></p>
							<ul className="list-disc list-inside text-base text-light-gray space-y-2 mx-4">
								<span>We exist to:</span>
								<li>Connect tradespeople with meaningful opportunities</li>
								<li>Break the stigma around blue-collar work</li>
								<li>Deliver world-class upskilling and career support</li>
								<li>Build a strong, inclusive community across the industry</li>
							</ul>
							<p className="text-base text-light-gray mt-6">
								Whether you’re on the tools, at the desk, or building something new —
								we’re with you every step of the way</p>
						</div>
					</div>
				</div>
			  </Container>
			</Wrapper>

	);
}