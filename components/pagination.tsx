import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import Wrapper from "./wrapper";

export default function Pagination({ total, postsPerPage = 10, currentPage = 1 }) {
	const totalPages = Math.ceil(total / postsPerPage);
	const router = useRouter();

	const createPageLink = (pageNum) => {
		return pageNum === 1 ? '/blogs' : `/blogs/${pageNum}`;
	};

	return (
		<Wrapper className="bg-dark-blue text-white py-16 overflow-hidden">
			<Container>
				<div className="flex justify-center items-center gap-3 py-4">
					{currentPage > 1 ? (
						<Link href={createPageLink(currentPage - 1)} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1C1C2A] text-white hover:bg-[#2c2c3a]" >
							<Image src="/images/arrow-right-previous.svg" width={20} height={20} alt="Previous" />
						</Link>
					) : (
						<div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1C1C2A] text-white opacity-40 pointer-events-none">
							<Image src="/images/arrow-right-previous.svg" width={20} height={20} alt="Previous" />
						</div>
					)}

					{Array.from({ length: totalPages }, (_, i) => {
						const pageNum = i + 1;
						return (
							<Link key={pageNum} href={createPageLink(pageNum)} 
								className={`w-10 h-10 flex items-center justify-center rounded-full border text-white ${ currentPage === pageNum ? "bg-white text-black font-bold" : "border-white hover:bg-white hover:text-black"
								}`} >
								{pageNum}
							</Link>
						);
					})}

					{currentPage < totalPages ? (
						<Link href={createPageLink(currentPage + 1)} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1C1C2A] text-white hover:bg-[#2c2c3a]">
							<Image src="/images/arrow-right-white.svg" width={20} height={20} alt="Next" />
						</Link>
					) : (
						<div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1C1C2A] text-white opacity-40 pointer-events-none">
							<Image src="/images/arrow-right-white.svg" width={20} height={20} alt="Next" />
						</div>
					)}
				</div>
			</Container>
		</Wrapper>
	);
}