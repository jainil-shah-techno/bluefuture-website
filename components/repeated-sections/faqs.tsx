import { useState } from "react";
import Image from "next/image";
import Container from "../design/container";
import Wrapper from "../design/wrapper";

export default function FAQs({ faqsSectionData }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const toggleFaq = (index: number) => {
		setActiveIndex(activeIndex === index ? -1 : index);
	};

	const faqs = faqsSectionData?.faqQa || [];

	return (
		<Wrapper className="dark-blue py-6 w-full">
			<Container className="mt-10 w-full px-4">
				<div className="flex flex-col lg:flex-row gap-10 w-full">
					<div className="lg:w-2/5 text-white flex flex-col gap-4">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
							{faqsSectionData?.faqHeading}
						</h1>
						<p className="text-light-gray text-base sm:text-lg lg:text-xl">
							{faqsSectionData?.faqSubheading}
						</p>
					</div>

					<div className="lg:w-3/5 flex flex-col gap-4 text-white">
						{faqs.map((item, index) => {
							const isActive = index === activeIndex;
							return (
								<div key={index} className={`border ${isActive ? "border-[#F6B312]" : "border-faq-border"} rounded-xl py-6 px-6`}>
									<button onClick={() => toggleFaq(index)} className="flex w-full justify-between items-center">
										<span className="text-base sm:text-lg lg:text-xl font-medium text-left">
											{item.faqQuestions}
										</span>
										<div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? "bg-[#F6B312]" : "bg-faq-border" }`} >
											<Image src={isActive ? "/images/xmark.svg" : "/images/plus.svg"} alt="Toggle Icon" width={17} height={17}
											/>
										</div>
									</button>
									{isActive && (
										<p className="text-light-gray text-sm sm:text-base lg:text-xl mt-4">
											{item.faqAnswers}
										</p>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}