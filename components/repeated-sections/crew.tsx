import { useState } from "react";
import Image from "next/image";
import Container from "../design/container";
import Wrapper from "../design/wrapper";

export default function Crew({ crewSectionData }) {
	const crewMembers = crewSectionData?.crewMembersCard || [];
	const [activeId, setActiveId] = useState(crewMembers[0]?.crewId || "1");

	return (
		<Wrapper className="bg-dark-blue py-12 text-white relative overflow-hidden">
			<Container className="text-center mb-12">
				<h2
					className="text-5xl font-medium"
					dangerouslySetInnerHTML={{ __html: crewSectionData?.crewSectionHeading || "" }}
				/>
			</Container>

			<div className="absolute inset-0 z-0">
				<Image src="/images/vector.svg" alt="Crew White Lines" fill className="object-cover" />
			</div>

			<Container className="">
				<div className="flex justify-center gap-4 items-start flex-wrap relative z-10">
					{crewMembers.map((member) =>
						activeId === member.crewId ? (
							<div key={member.crewId} className="flex bg-black rounded-xl border border-border-color overflow-hidden w-[720px] h-[380px]" >
							
								<div className="w-2/3 p-6 flex flex-col justify-between">
									<div>
										<div className="w-10 h-10 mb-10">
											<Image src="/images/quote.svg" alt="quote" width={40} height={40} />
										</div>
										<p className="mt-4 text-2xl font-semibold">{member.crewQuote}</p>
									</div>
									<div className="mt-6">
										<p className="text-xl font-semibold text-white">{member.crewName}</p>
										<p className="text-lg text-light-gray">{member.crewRole}</p>
									</div>
								</div>

								{/* RIGHT */}
								<div className="w-1/3 relative">
									<Image src={member.crewImage?.node?.sourceUrl || ""}
										alt={member.crewName} fill className="object-cover" />
									<div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#000000e0] to-transparent z-10 rounded-br-xl" />
									<div className="absolute bottom-4 left-4 z-20">
										<Image src="/images/logo.svg" alt="Closed Single Crew Logo Vertical" width={200} height={37} />
									</div>
								</div>
							</div>
						) : (
							<div key={member.crewId} onClick={() => setActiveId(member.crewId)}
								className="relative w-[70px] h-[380px] rounded-xl overflow-hidden bg-cover bg-center cursor-pointer transition-all duration-300 group" style={{ backgroundImage: `url(${member.crewImage?.node?.sourceUrl || ""})` }} >
								<div className="absolute flex items-end w-full h-full top-0 left-0">
									<Image src="/images/logo.svg" className="-translate-y-24 scale-[2.5] -rotate-90" alt="logo" width={200} height={37}
									/>
								</div>
							</div>
						)
					)}
				</div>
			</Container>
		</Wrapper>
	);
}