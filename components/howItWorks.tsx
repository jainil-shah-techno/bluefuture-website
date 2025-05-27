import { useState } from "react";
import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function HowItWorks({ howItWorksSectionData }) {
	const steps = howItWorksSectionData?.steps || [];
	
	const [activeStep, setActiveStep] = useState(steps[0]?.stepId || 1);
	const currentStep = steps.find((step) => step.stepId === activeStep);

	return (
		<Wrapper className="dark-blue py-16 overflow-hidden text-white">
			<Container className="px-4 mt-10 max-w-7xl mx-auto flex flex-col gap-10">
				<div className="flex flex-col gap-4 text-center">
					<h1 className="text-3xl md:text-5xl font-medium">
						{howItWorksSectionData.heading}
					</h1>
					<p className="text-light-gray text-lg md:text-xl">
						{howItWorksSectionData.description}
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-12 items-start">
					<div className="w-full lg:w-1/2 flex flex-col gap-8">
						{steps.map((step) => (
							<div key={step.stepId} className="flex flex-col gap-4">
								<div className="flex items-start gap-6 cursor-pointer" onClick={() => setActiveStep(step.stepId)}>
									<h1 className={`text-[100px] font-extrabold text-transparent bg-gradient-to-b from-white/25 to-white/0 bg-clip-text leading-none ${ activeStep === step.stepId ? "opacity-100" : "opacity-30"} w-[100px]`}>
										{step.stepId}
									</h1>

									<div className="pt-2">
										<h3 className={`text-2xl font-semibold ${ activeStep === step.stepId ? "text-white" : "text-gray-400" }`}>
											{step.stepTitle}
										</h3>
										{activeStep === step.stepId && (
											<p className="mt-1 text-base text-light-gray max-w-sm">
												{step.stepDescription}
											</p>
										)}
									</div>
								</div>

								{activeStep === step.stepId && step.stepImage?.sourceUrl && (
									<div className="block lg:hidden mt-4 rounded-xl overflow-hidden border border-gray-800">
										<Image src={step.stepImage.sourceUrl} alt={step.stepTitle}
											width={800} height={600} 
											className="w-full h-auto object-contain"
										/>
									</div>
								)}
							</div>
						))}
					</div>

					<div className="w-full lg:w-1/2 hidden lg:block">
						{currentStep?.stepImage?.node.sourceUrl && (
							<div className="rounded-xl overflow-hidden border border-gray-800">
								<Image src={currentStep.stepImage?.node.sourceUrl} 
									alt={currentStep.stepTitle} width={800} height={600} 
									className="w-full h-auto object-contain" 
								/>
							</div>
						)}
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}