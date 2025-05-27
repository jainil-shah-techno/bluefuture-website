import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import Wrapper from "../components/wrapper";
import Header from "../components/header";
import Footer from "../components/footer/footer";

export default function BlogHero() {

	return (
		
		<Wrapper className="bg-dark-blue text-white py-16 overflow-hidden">
			<Container className="">
				<div className="flex flex-col gap-4 justify-center items-center bg-dark-blue text-white">
					<h2 className="text-4xl md:text-6xl font-medium text-center">
						<span className="bg-yellow-gradient bg-clip-text text-transparent">Trade Hangout</span> - Chill with the Crew!
					</h2>
					<p className="text-lg md:stext-xl text-light-gray text-center">Kick Back with Tips, Tales, and Trends to Boost Your Trade Game</p>
				</div>
			</Container>
		</Wrapper>
	);
}