import Image from "next/image";
import Container from "../design/container";
import Wrapper from "../design/wrapper";

export default function Profile({ createProfileSectionData }) {
	return (
		<div className="flex justify-center px-4">
			<Wrapper className="relative w-full max-w-4xl rounded-2xl bg-profile-gradient text-white py-16 overflow-hidden">
				<Container className="relative z-10 text-center flex flex-col items-center 
					gap-6 px-4">
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
							{createProfileSectionData.profileHeading}
						</h2>
						<p className="text-sm sm:text-base md:text-lg mt-2 text-white/80 font-light">
							{createProfileSectionData.profileDescription}
						</p>
					</div>

					<div className="border border-white rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-sm w-full sm:w-auto">
						<Image src={createProfileSectionData.qrImage?.node.sourceUrl} alt="QR Code" width={115} height={115} className="object-contain" />

						<div className="flex flex-col gap-2">
							<a href="#">
								<Image src={createProfileSectionData.appStoreImage?.node.sourceUrl} alt="Download on the App Store"width={178} height={52} />
							</a>
							<a href="#">
								<Image src={createProfileSectionData.gogglePlayImage?.node.sourceUrl} alt="Get it on Google Play"
									width={178} height={52} />
							</a>
						</div>
					</div>
				</Container>
			</Wrapper>
		</div>
	);
}