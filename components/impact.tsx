import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function Impact({ impactSectionData }) {

	return (
		<Wrapper className="bg-dark-blue text-white py-24">
			<Container className="">
				<div className="flex flex-col items-center text-center mb-16 px-4">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight"
						dangerouslySetInnerHTML={{ __html: impactSectionData.impactHeading }}>
					</h2>
					<p className="text-sm sm:text-base text-light-gray mt-4"
						dangerouslySetInnerHTML={{ __html: impactSectionData.subheading }}>
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-white/10 rounded-2xl p-6 sm:p-10 md:p-12 items-center text-center md:text-left">
					<div className="space-y-10 flex flex-col items-center md:items-start">
					    {impactSectionData.impactHighlights?.map((item, index) => (
					      <div key={index}>
					        <h3 className="text-[64px] sm:text-[80px] md:text-[100px] font-extrabold text-transparent bg-gradient-to-b from-white/25 to-white/0 bg-clip-text leading-none">
					          {item.reachNumber}
					        </h3>
					        <p className="text-base sm:text-lg text-light-gray mt-2">{item.reachText}</p>
					      </div>
					    ))}
					</div>

					<div className="w-full max-w-[500px] mx-auto">
						<Image src={impactSectionData.impactImage.node.sourceUrl} alt="Impact Section Image" width={602}
							height={788} className="w-full h-auto object-cover" />
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}