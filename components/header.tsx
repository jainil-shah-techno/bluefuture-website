import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '../components/wrapper';
import Container from '../components/container';
import { Menu, X } from 'lucide-react';

export default function Header({ headerData }) {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	if (!headerData || !headerData.headerFields) {
		return null;
	}

	return (
		<Wrapper className="">
			<Container className="!px-4 md:!px-5">
				<div className="flex items-center justify-between py-4 relative">
					<div>
						<Link href="/">
							<Image  src={headerData.headerFields.logo?.node.sourceUrl}  
								alt="Blufutur Logo" width={163} height={44} />
						</Link>

					</div>

					<div className="md:flex gap-4">
						<nav className="hidden md:flex items-center gap-6 text-sm text-white">
						    {headerData.headerFields.menuItems.map((item, index) => (
						        <Link key={index} href={item.url}>
						          {item.label}
						        </Link>
						    ))}
						</nav>

						<div className="hidden md:flex gap-4">
							<Link href="#" className="border border-white text-white px-5 py-2 rounded-md text-sm">
								{headerData.headerFields.loginButtonText}
							</Link>
							<Link href="#" className="bg-button-gradient text-white px-5 py-2 rounded-md text-sm">
								{headerData.headerFields.joinButtonText}
							</Link>
						</div>
					</div>    

					<button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Mobile Menu" > {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} /> }
					</button>

					{isMobileMenuOpen && (
						<div className="absolute top-full left-0 w-full bg-dark-black text-white flex flex-col items-start px-4 py-4 space-y-4 md:hidden z-10 shadow-lg border-t border-gray-700">
							{headerData.headerFields.menuItems.map((item, index) => (
								<Link key={index} href={item.url}>
									{item.label}
								</Link>
							))}

							<hr className="border-gray-600 w-full" />

							<div className="flex flex-col gap-2 w-full">
								<button className="border border-white text-white px-4 py-2 rounded-md text-sm w-full">
									{headerData.headerFields.loginButtonText}
								</button>
								<button className="bg-button-gradient text-white px-4 py-2 rounded-md text-sm w-full">
									{headerData.headerFields.joinButtonText}
								</button>
							</div>
						</div>
					)}

				</div>
			</Container>
		</Wrapper>
	);
}