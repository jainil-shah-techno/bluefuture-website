import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../design/container";
import Wrapper from "../design/wrapper";
import Pagination from "./pagination";

export default function BlogsLoop({ blogData }) {
	const blogs = blogData;

	const featuredBlog = blogs[0];
	const remainingBlogs = blogs.slice(1);

	const blogsPerPage = 9;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(remainingBlogs.length / blogsPerPage);

	const currentBlogs = remainingBlogs.slice(
		(currentPage - 1) * blogsPerPage,
		currentPage * blogsPerPage
	);

	const handlePageClick = (pageNum) => {
		if (pageNum >= 1 && pageNum <= totalPages) {
			setCurrentPage(pageNum);
		}
	};

	return (
		<Wrapper className="bg-dark-blue text-white py-16 overflow-hidden">
			<Container className="" >
				<div className="hidden md:flex flex-col md:flex-row gap-4 border border-border-color rounded-lg p-4">
					<div className="w-full md:w-[432px] h-auto flex-shrink-0">
					    <Link href={`/${featuredBlog.node.slug}`} legacyBehavior>
						    <a>
						        <Image src={featuredBlog.node.featuredImage?.node.sourceUrl} 
						        	width={432} height={432} alt={featuredBlog.node.title}
						          className="object-cover rounded-lg" />
						    </a>
					    </Link>
					</div>

					<div className="flex flex-col gap-4 justify-start items-start px-2 sm:px-4 md:py-12 md:mx-6">
						    <Link href={`/${featuredBlog.node.slug}`} legacyBehavior>
						      <a className="text-xl sm:text-2xl md:text-3xl leading-snug hover:underline">
						        {featuredBlog.node.title}
						      </a>
						    </Link>

					    <div className="text-sm sm:text-base md:text-lg text-light-gray leading-relaxed" dangerouslySetInnerHTML={{ __html: featuredBlog.node.excerpt }}
					    />

					    <div className="flex flex-wrap gap-2 text-sm text-light-gray">
						    <span>
						        {new Date(featuredBlog.node.dateGmt).toLocaleDateString("en-US", {
						          year: "numeric",
						          month: "short",
						          day: "numeric",
						        })}
						    </span>
						    <span>|</span>
						    <span>{featuredBlog.node.blogSettings.readTime}</span>
						    <span>|</span>
						    <span>{featuredBlog.node.author?.node.name}</span>
					    </div>

					    <div className="flex gap-2 items-center">
						    <Link href={`/${featuredBlog.node.slug}`} legacyBehavior>
						        <a className="text-base font-semibold cursor-pointer hover:underline">
						          Read More
						        </a>
						    </Link>
						    <Image src="/images/arrow-right-white.svg" width={24} height={24} alt="Arrow" />
					    </div>
					</div>
				</div>


				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
					{currentBlogs.map((blog) => (
					    <div key={blog.node.id}
					      className="flex flex-col justify-between border border-border-color rounded-lg bg-career-bg text-white p-4">
					      <div>
					        <Link href={`/${blog.node.slug}`} legacyBehavior>
						        <a>
						            <Image src={blog.node.featuredImage?.node.sourceUrl} 
						            	width={432} height={250} className="rounded-md mb-4" 
						            	alt={blog.node.title} 
						            	style={{ width: "100%", height: "auto" }} />
						        </a>
					        </Link>

						    <div className="flex flex-col gap-3">
						        <Link href={`/${blog.node.slug}`} legacyBehavior>
						            <a className="text-lg font-semibold leading-snug hover:underline">
						              {blog.node.title}
						            </a>
						        </Link>

						        <div className="text-sm text-[#A1A1AA]"
						            dangerouslySetInnerHTML={{ __html: blog.node.excerpt }}>
						          </div>

						          <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
						            <span>
						              {new Date(blog.node.dateGmt).toLocaleDateString("en-US", {
						                year: "numeric",
						                month: "short",
						                day: "numeric",
						              })}
						            </span>
						            <span>|</span>
						            <span>{blog.node.blogSettings.readTime}</span>
						            <span>|</span>
						            <span>{blog.node.author?.node.name}</span>
						          </div>
						        </div>
						    </div>

					      <div className="flex items-center gap-2 mt-4">
					        <Link href={`/${blog.node.slug}`} className="text-base font-semibold text-white hover:underline" >
					          Read More
					        </Link>

					        <Image src="/images/arrow-right-white.svg" width={20}
					          height={20} alt="Arrow Right" />
					      </div>
					    </div>
					  ))}
					</div>

			</Container>
		</Wrapper>
	);
}