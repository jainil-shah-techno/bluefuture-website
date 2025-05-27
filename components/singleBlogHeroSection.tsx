import { useState } from "react";
import Image from "next/image";
import Container from "../components/container";
import Wrapper from "../components/wrapper";

export default function SingleBlogHeroSection({ post }) {

	return (
		<Wrapper className="bg-dark-blue text-white py-16 overflow-hidden">
			<Container className="" >
				<div className="flex flex-col justify-center items-center gap-4">
					<h1 className="text-6xl text-center">{post.title}</h1>
					<p className="text-light-gray text-xl text-center" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
					<div className="flex gap-2">
						<h4 className="text-sm text-light-gray">
							{new Date(post.dateGmt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "short",
								day: "numeric",
							})}
						</h4>
						<span className="text-light-gray">|</span>
						<h4 className="text-sm text-light-gray">{post.blogSettings.readTime}</h4>
						<span className="text-light-gray">|</span>
						<h4 className="text-sm text-light-gray">By {post.author.node.name}</h4>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}
