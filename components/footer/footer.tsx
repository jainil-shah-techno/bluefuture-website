import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import Wrapper from "../wrapper";


export default function Footer({ footerData } ) {

	return (
		<footer>
			<Wrapper className="py-20 bg-footer-gradient">
				<Container className="!px-0 md:!px-5">
					<div className="flex flex-col gap-1 md:gap-3 justify-center items-center">
						<span className="text-2xl md:text-5xl p-4 text-center text-white">{footerData.footerFields.headingText}</span>
						<span className="text-md md:text-lg text-center text-light-gray">{footerData.footerFields.description}</span>
					</div>
					<div className="flex gap-2 items-center justify-center pt-10 pb-10">
						<Link href="#" className="border border-[#FFA500] text-transparent bg-clip-text bg-yellow-gradient px-4 py-2 rounded-md text-sm flex items-center gap-2">
								{footerData.footerFields.linkText}
							<Image src="/images/arrow-right.svg" alt="Arrow Right" width={24}
								height={24}
							/>
						</Link>
					</div>

					<div className="border border-2 border-border-info rounded-lg p-10 px-10">
						<div className="flex flex-col md:flex-row justify-between items-start border-b border-border-info p-4 gap-6 md:gap-0">
							<div className="w-full md:w-2/5 flex flex-col gap-2 text-center md:text-left items-center md:items-start">
								<Image src={footerData.footerFields.footerLogo?.node.sourceUrl} alt="Blufutur Logo"  width={163} height={44} />
								<p className="text-lighter-gray text-base">
								  {footerData.footerFields.logoText}
								</p>
							</div>

							<div className="w-full md:w-3/5 flex flex-col gap-4 items-center md:items-end">
								<nav className="hidden md:flex space-x-6 justify-end text-base text-white font-semibold">
									{footerData.footerFields.footerMenu.map((item, index) => (
										<Link key={index} href={item.url}>
										  {item.label}
										</Link>
									))}
								</nav>

								<div className="flex gap-4 justify-center md:justify-end">
									{footerData.footerFields.socialIcons?.map((iconItem, index) => (
										<div key={index} className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
										  <Image
											src={iconItem.image?.node.sourceUrl}
											width={iconItem.iconWidth}
											height={iconItem.iconHeight}
											alt={iconItem.alt || "Social Icon"}
										  />
										</div>
									  ))}
								</div>

							</div>
						</div>

 
						<div className="flex flex-col md:flex-row justify-between border-b border-border-info py-8 p-4 gap-6 md:gap-0">
								<div className="w-full md:w-2/5 flex flex-col gap-2 text-center md:text-left items-center md:items-start">
									<span className="text-lighter-gray text-base">
									  {footerData.footerFields.countryRelatedText}
									</span>
								</div>
								<div className="w-full md:w-3/5 flex flex-col gap-3 items-center md:items-end">
									<div className="flex flex-col gap-2">
										<div className="text-white font-semibold text-base whitespace-nowrap text-center md:text-left">
											{footerData.footerFields.heading}
										</div>
										<ul className="flex flex-wrap justify-center md:justify-end items-center text-base text-lighter-gray gap-y-2">
											<li className="w-3 h-3 bg-blue-600 rotate-45 inline-block mx-2"></li>
											{footerData.footerFields.exploreFields?.map((item, index) => (
											    <li key={index} className="flex items-center">
											      <span>{item.exploreAreaLabel}</span>
											      {index !== footerData.footerFields.exploreFields.length - 1 && (
											        <span className="w-3 h-3 bg-blue-600 rotate-45 inline-block mx-2"></span>
											      )}
											  	</li>
											))}
										</ul>
									</div>
								</div>
							</div>


						<div className="flex flex-col md:flex-row justify-end items-center border-b border-border-info p-4 py-8 gap-6 md:gap-0">
							<div className="w-full md:w-2/5 flex flex-col gap-2 text-center md:text-left items-center md:items-start">
								<h4 className="font-semibold text-sm text-white">
									{footerData.footerFields.newsletterHeading}</h4>
								<span className="text-lighter-gray text-sm">
								  {footerData.footerFields.newsletterDescription}
								</span>
							</div> 
							<div className="w-full md:w-3/5 flex justify-center md:justify-end">
								<div className="flex w-full max-w-lg flex-col sm:flex-row gap-4 sm:gap-0">
								  <input type="email"  placeholder={footerData.footerFields.newsletterEmailPlaceholder}  className="w-full bg-input-bg text-white rounded-md placeholder-white text-sm py-3 px-4" 
								  />
								  <button className="w-full sm:w-48 rounded-md text-white font-semibold bg-button-gradient py-4">
									{footerData.footerFields.newsletterButtonText}
								  </button>
								</div>
							</div>
						</div>


						<div className="flex flex-col md:flex-row items-start gap-4 md:gap-2 py-8">
							<div className="flex shrink-0 gap-2">
								<Image src={footerData.footerFields.acknowledgementFlag1?.node.sourceUrl} width={46} height={28} alt="flag-1" />
								<Image src={footerData.footerFields.acknowledgementFlag2?.node.sourceUrl} width={46} height={28} alt="flag-2" />
							</div>	
							<div className="text-lighter-gray text-sm">
							   {footerData.footerFields.acknowledgementText}
								<span className="mx-1 bg-yellow-gradient bg-clip-text text-transparent">{footerData.footerFields.acknowledgementLinkText}</span>
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>
		</footer>
	);
}