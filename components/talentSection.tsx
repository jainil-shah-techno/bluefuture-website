import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function TalentSection() {
	return (
		<>
			<Wrapper className="py-16 bg-white">
				<Container className="px-4 mt-10">
					<div className="text-center">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-dark-black">
							Find Top Talent, Faster and Smarter
						</h2>
						<p className="mt-4 text-sm sm:text-base text-light-black max-w-2xl mx-auto">
							Post jobs and access a pool of qualified candidates, powered by AI and modern recruitment tools
						</p>
					</div>

					<div className="mt-16 flex flex-col md:flex-row gap-10 items-center 
						md:items-start">
						<div className="w-full md:w-1/2 text-center md:text-left">
							<h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark py-4">
								AI-driven job matching <br className="hidden sm:block" /> and candidate filtering
							</h3>
							<ul className="space-y-4 text-sm sm:text-base text-light-black">
								<li>
									Customizable job posting templates, including AI-generated job descriptions
								</li>
								<li>
									Advanced applicant tracking and communication tools
								</li>
								<li>
									Access to a community of top-tier trades professionals
								</li>
							</ul>
						</div>

						<div className="w-full md:w-1/2 flex justify-center">
							<Image src="/images/job-matching-card.svg" alt="Job matching preview" width={400} height={400} className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md" />
						</div>
					</div>
				</Container>
			</Wrapper>
		</>
	);
}