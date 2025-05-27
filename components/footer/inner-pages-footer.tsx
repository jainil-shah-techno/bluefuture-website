import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import Wrapper from "../wrapper";


export default function InnerPagesFooter() {

	return (
		<footer>
			<Wrapper className="py-20 bg-footer-gradient">
				<Container className="!px-0 md:!px-5">
					<div className="flex flex-col gap-1 md:gap-3 justify-center items-center">
						<span className="text-2xl md:text-5xl p-4 text-center text-white">It’s Your Time to Rise. Let’s Get to Work.</span>
						<span className="text-md md:text-lg text-center text-light-gray"> Whether you're looking to hire, learn, connect or lead — BluFutur is built for you.</span>
					</div>
					<div className="flex gap-4 items-center justify-center pt-10 pb-10">
					    <button className=" border border-[#FFA500] text-transparent bg-clip-text bg-yellow-gradient px-4 py-2 rounded-md text-sm flex items-center gap-2">
					        Join Now — It’s Free
					        <Image src="/images/arrow-right.svg" alt="Arrow Right" width={24}height={24}
					        />
					    </button>
					    <button className="border border-[#FFA500] text-transparent bg-clip-text bg-yellow-gradient px-4 py-2 rounded-md text-sm flex items-center gap-2">
					        Join Now — It’s Free
					        <Image src="/images/arrow-right.svg" alt="Arrow Right" width={24}height={24}
					        />
					    </button>
					</div>

					<div className="border border-2 border-border-info rounded-lg p-10 px-10">
						<div className="flex flex-col md:flex-row justify-between items-start border-b border-border-info p-4 gap-6 md:gap-0">
							<div className="w-full md:w-2/5 flex flex-col gap-2 text-center md:text-left items-center md:items-start">
							    <Image src="/images/blue-future-logo.svg" alt="Blufutur Logo" 
							    	width={163} height={44} />
							    <p className="text-lighter-gray text-base">
							      Empowering the Backbone of Our Future
							    </p>
							</div>

							<div className="w-full md:w-3/5 flex flex-col gap-4 items-center md:items-end">
							    <nav className="hidden md:flex space-x-6 justify-end text-base text-white font-semibold">
								    <Link href="#">About Us</Link>
								    <Link href="#">Careers</Link>
								    <Link href="#">Contact Us</Link>
								    <Link href="#">Privacy Policy</Link>
								    <Link href="#">Terms of Service</Link>
							    </nav>

							    <div className="flex gap-4 justify-center md:justify-end">
							      	<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
								        <Image src="/images/linkdien.svg" width={21} height={21} alt="LinkedIn" />
								    </div>
								    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
								        <Image src="/images/Vector.svg" width={12} height={23} alt="Social" />
								    </div>
								    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
								        <Image src="/images/instagram.svg" width={19} height={19} alt="Instagram" />
								    </div>
								    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
								        <Image src="/images/x.svg" width={21} height={21} alt="X" />
								    </div>
							    </div>
						  	</div>
						</div>

 
		                <div className="flex flex-col md:flex-row justify-between border-b border-border-info py-8 p-4 gap-6 md:gap-0">
								<div className="w-full md:w-2/5 flex flex-col gap-2 text-center md:text-left items-center md:items-start">
								    <span className="text-lighter-gray text-base">
								      Australia's all-in-one platform for skilled trades - jobs, training, events, and career support.
								    </span>
								</div>
							  	<div className="w-full md:w-3/5 flex flex-col gap-3 items-center md:items-end">
								    <div className="flex flex-col gap-2">
									    <div className="text-white font-semibold text-base whitespace-nowrap text-center md:text-left">
									        Explore
									    </div>
									    <ul className="flex flex-wrap justify-center md:justify-end items-center text-base text-lighter-gray gap-y-2">
									        <li className="w-3 h-3 bg-blue-600 rotate-45 inline-block mx-2">
									        </li>
									        <li className="flex items-center">
									          <span>Trade Jobs</span>
									          <span className="w-3 h-3 bg-blue-600 rotate-45 inline-block mx-2"></span>
									        </li>
									        <li className="flex items-center">
									          <span>Courses</span>
									          <span className="w-3 h-3 bg-blue-600 rotate-45 inline-block mx-2"></span>
									        </li>
									        <li className="flex items-center">
									          <span>Events</span>
									          <span className="w-3 h-3 bg-blue-600 rotate-45 inline-block mx-2"></span>
									        </li>
									        <li className="flex items-center">
									          <span>Hire Talent</span>
									          <span className="w-3 h-3 bg-blue-600 rotate-45 inline-block mx-2"></span>
									        </li>
									        <li className="flex items-center">
									          <span>Community</span>
									        </li>
									    </ul>
								    </div>
							  	</div>
							</div>


		               	<div className="flex flex-col md:flex-row justify-end items-center border-b border-border-info p-4 py-8 gap-6 md:gap-0">
							<div className="w-full md:w-2/5 flex flex-col gap-2 text-center md:text-left items-center md:items-start">
							    <h4 className="font-semibold text-sm text-white">NEWSLETTER SIGNUP</h4>
							    <span className="text-lighter-gray text-sm">
							      Get the latest trade job alerts, industry news, and hands-on upskilling tips — straight to your inbox.
							    </span>
							</div> 
							<div className="w-full md:w-3/5 flex justify-center md:justify-end">
							    <div className="flex w-full max-w-lg flex-col sm:flex-row gap-4 sm:gap-0">
							      <input type="email"  placeholder="someone@example.com"  className="w-full bg-input-bg text-white rounded-md placeholder-white text-sm py-3 px-4" 
							      />
							      <button className="w-full sm:w-48 rounded-md text-white font-semibold bg-button-gradient py-4">
							        Subscribe
							      </button>
							    </div>
							</div>
						</div>


		                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-2 py-8">
							<div className="flex shrink-0 gap-2">
							    <Image src="/images/flag-1.jpg" width={46} height={28} alt="flag-1" />
							    <Image src="/images/flag-2.jpg" width={46} height={28} alt="flag-2" />
							</div>	
							<div className="text-lighter-gray text-sm">
							    Blufutur acknowledges Aboriginal and Torres Strait Islander peoples
							    as the first people and Traditional Custodians of the land and
							    waterways throughout Australia. We recognise their continued
							    connection to culture, community and Country, and pay our respects to
							    Elders past and present. Learn more about our commitment
							    <span className="mx-1 bg-yellow-gradient bg-clip-text text-transparent">here.</span>
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>
		</footer>
	);
}