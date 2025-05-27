import { useState } from "react";
import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

const steps = [
	{
		id: 1,
		title: "Job Seekers",
		description: "Our platform uses AI to match your skills and experience with the best job opportunities in the skilled trades.",
		icon: "/images/trade-1.svg",
		activeIcon: "/images/trade-1.svg",
	},
	{
		id: 2,
		title: "Employers",
		description: "Connect with top talent and manage job listings effectively.",
		icon: "/images/trade-2.svg",
		activeIcon: "/images/trade-2.svg",
	},
	{
		id: 3,
		title: "Events",
		description: "Stay updated with the latest industry events and workshops.",
		icon: "/images/trade-3.svg",
		activeIcon: "/images/trade-3.svg",
	},
	{
		id: 4,
		title: "Courses",
		description: "Access courses designed to enhance your trade skills.",
		icon: "/images/trade-4.svg",
		activeIcon: "/images/trade-4.svg",
	},
	{
		id: 5,
		title: "Community",
		description: "Engage with a community of skilled professionals.",
		icon: "/images/trade-5.svg",
		activeIcon: "/images/trade-5.svg",
	},
];

export default function SkilledTradesSection() {
	const [activeStep, setActiveStep] = useState(1);

	return (
		<Wrapper className="py-16 text-white">
			<Container className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col justify-center items-center p-16 gap-2">
					<h2 className="text-3xl md:text-5xl font-medium text-center">
						<span className="bg-yellow-gradient bg-clip-text text-transparent">The Future
						</span>
						<span className="text-white"> of Skilled Trade Professionals</span>
					</h2>
					<p className="text-center text-base md:text-xl text-light-gray font-light">From job matching to online training, events to networking — we connect every part of your trade career.</p>
				</div>
				<div className="flex flex-col gap-10 w-full lg:w-1/2">
					{steps.map((step) => (
						<div key={step.id} className="flex items-start gap-6 cursor-pointer relative"
							onClick={() => setActiveStep(step.id)} >

							<h1 className={`text-[120px] font-extrabold text-transparent bg-gradient-to-b from-white/25 to-white/0 bg-clip-text leading-none ${activeStep === step.id ? "opacity-100" : "opacity-30"} w-[100px]`}>
								{step.id}
							</h1>
							
							<div className="pt-2">
								<h3 className={`text-xl font-semibold ${activeStep === step.id ? "text-white" : "text-gray-400"}`}>
									{step.title}
								</h3>
								{activeStep === step.id && (
									<p className="mt-1 text-sm text-gray-400 max-w-sm">{step.description}</p>
								)}
							</div>
						</div>
					))}
				</div>

				{/*<div className="w-full lg:w-1/2 flex justify-center">
					<div className="relative w-[400px] h-[300px] bg-[#0F1120] rounded-2xl border border-white/10 p-6 flex items-center justify-center">
						<div className="absolute flex gap-6 top-0 left-1/2 transform -translate-x-1/2 translate-y-[-30%]">
							{steps.map((step) => (
								<div key={step.id} className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${ activeStep === step.id ? "bg-blue-600 shadow-xl scale-110" : "bg-white/5"
									}`} >
									<Image src={activeStep === step.id ? step.activeIcon : step.icon} width={32} height={32} alt={step.title} />
								</div>
							))}
						</div>
					</div>
				</div>*/}
			</Container>
		</Wrapper>
	);
}