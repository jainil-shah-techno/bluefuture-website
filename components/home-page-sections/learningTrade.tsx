import { useState } from "react";
import Image from "next/image";
import Container from "../design/container";
import Wrapper from "../design/wrapper";

const steps = [
	{
		id: 1,
		title: "Find the Right Course for You",
		description:
			"Watch videos, complete assignments, and join webinars from real-world trades experts — all from your mobile or desktop.",
		image: "/images/learning-trade.svg",
	},
	{
		id: 2,
		title: "Enroll & Learn at Your Own Pace",
		description:
			"Our platform uses AI to connect you with the best opportunities based on your profile.",
		image: "/images/how-it-works2.svg",
	},
	{
		id: 3,
		title: "Get Certified & Job-Ready",
		description:
			"Easily apply to jobs and get hired faster with our seamless application process.",
		image: "/images/how-it-works3.svg",
	},
];

export default function LearningTrade() {
	const [activeStep, setActiveStep] = useState(1);
	const currentStep = steps.find((step) => step.id === activeStep);

	return (
		<Wrapper className="dark-blue py-16 overflow-hidden text-white">
			<Container className="px-4 mt-10 max-w-7xl mx-auto flex flex-col gap-10">
				<div className="flex flex-col gap-4 text-center">
					<h1 className="text-3xl md:text-5xl font-medium">How It Works</h1>
					<p className="text-light-gray text-lg md:text-xl">
						Streamline Your Job Search & Career Growth.
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-12 items-start">
					<div className="w-full lg:w-1/2 hidden lg:block">
						<div className="rounded-xl overflow-hidden border border-gray-800">
							<Image src={currentStep.image} alt={currentStep.title} width={800} 
							height={600} className="w-full h-auto object-contain" />
						</div>
					</div>
					<div className="w-full lg:w-1/2 flex flex-col gap-8">
						{steps.map((step) => (
							<div key={step.id} className="flex flex-col gap-4" >
								<div className="flex items-start gap-6 cursor-pointer" onClick={() => setActiveStep(step.id)} >
									<h1 className={`text-[100px] font-extrabold text-transparent bg-gradient-to-b from-white/25 to-white/0 bg-clip-text leading-none ${ activeStep === step.id ? "opacity-100" : "opacity-30" } w-[100px]`}>
										{step.id}
									</h1>

									<div className="pt-2">
										<h3 className={`text-2xl font-semibold ${ activeStep === step.id ? "text-white" : "text-gray-400" }`}>
											{step.title}
										</h3>
										{activeStep === step.id && (
											<p className="mt-1 text-base text-light-gray max-w-sm">
												{step.description}
											</p>
										)}
									</div>
								</div>

								{activeStep === step.id && (
									<div className="block lg:hidden mt-4 rounded-xl overflow-hidden border border-gray-800">
										<Image src={step.image} alt={step.title} width={800} 
											height={600} className="w-full h-auto object-contain"
										/>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}