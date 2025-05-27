import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function SingleBlogContent({ post }) {
	const [activeId, setActiveId] = useState(null);
	const [headings, setHeadings] = useState([]);
	const contentRef = useRef(null);

	useEffect(() => {
		if (!contentRef.current) return;	

		const headingElements = contentRef.current.querySelectorAll("h2");
		const headingList = [];

		headingElements.forEach((heading, index) => {
			let id = heading.id;

			if (!id) {
				id = `section-${index}`;
				heading.id = id;
			}

			headingList.push({
				id,
				title: heading.innerText,
			});
		});

		setHeadings(headingList);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: "-50% 0px -50% 0px" }
		);

		headingElements.forEach((section) => observer.observe(section));
		return () => headingElements.forEach((section) => observer.unobserve(section));
	}, [post]);

	return (
		<Wrapper className="bg-dark-blue text-white py-4 overflow-hidden">
			<Container className="" >
				<Image src={post.featuredImage.node.sourceUrl} width={1296} height={678} alt="Single Blog Image" />

				<div className="flex flex-col lg:flex-row gap-12 mt-12">
					<div className="lg:w-3/4">
						<div ref={contentRef}
							className="prose prose-invert max-w-none scroll-smooth"
							dangerouslySetInnerHTML={{ __html: post?.content }}
						/>
					</div>

					<div className="lg:w-1/4 space-y-10">
						<aside className="bg-[#1A1A2E] p-6 rounded-lg border border-gray-700 h-fit sticky top-24">
							<h3 className="text-white text-lg mb-4">Table of contents</h3>
							<ol className="space-y-3 text-sm">
								{headings.map((heading) => (
									<li key={heading.id}>
										<a href={`#${heading.id}`} className={`block transition ${
												activeId === heading.id ? "text-border-color font-semibold" : "text-gray-400"}`}>
											{heading.title}
										</a>
									</li>
								))}
							</ol>
						</aside>

						<div className="mt-6">
							<h4 className="text-xs uppercase text-white mb-2">Want more trade tips like this?</h4>
							<p className="text-sm text-gray-400 mb-4">
								Get weekly insights, job alerts, and exclusive content for tradies — right in your inbox.
							</p>
							<div className="flex gap-4">
								<button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white rounded-md bg-button-gradient">
									Subscribe Now
									<Image src="/images/arrow-right-white.svg" width={24} height={24} alt="Arrow" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}