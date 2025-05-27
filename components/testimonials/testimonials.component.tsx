import React from 'react';
import Slider from "react-slick";
import Container from "../container";
import Wrapper from "../wrapper";
import ItemComponent from "./item.component";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TestimonialsComponent({data}) {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
    };

    let slickRef: any = React.createRef();

    const handleNextEvent = () => {
        slickRef.slickNext();
    }

    const handlePreviousEvent = () => {
        slickRef.slickPrev();
    }


    const {title, subtitle, testimonialList} = data;
    return (
        <Wrapper className="testimonial-component footer-wrapper bg-navyblue">
            <Container className="py-[120px]">
                <div className="max-w-full flex">
                    <div className="grid grid-cols-5 gap-4 items-center z-10">
                        <div className="col-span-5 md:col-span-2 max-w-[400px] text-center sm:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                {title}
                            </h2>

                            <p className="mt-6 text-white text-base font-normal">
                                {subtitle}
                            </p>
                            <div className="hidden md:flex flex-row justify-center md:justify-start items-center space-x-3 mt-5">
                                <button
                                    type="button"
                                    onClick={handlePreviousEvent}
                                    className="prev-button rounded-full border border-[#50DCF2] bg-[#FEFCFB] p-3 text-[#999] hover:bg-[#50DCF2] hover:text-black"
                                >
                                    <span className="sr-only">Previous Slide</span>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM17 9H1V7H17V9Z"
                                            fill="black"/>
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleNextEvent}
                                    className="next-button rounded-full border border-[#50DCF2] bg-[#FEFCFB] p-3 text-[#999] hover:bg-[#50DCF2] hover:text-black"
                                >
                                    <span className="sr-only">Next Slide</span>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                                            fill="black"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-5 md:col-span-3">
                            <Slider ref={(c: any) => (slickRef = c)} {...settings} className="flex flex-col self-center">
                                {testimonialList && testimonialList.length > 0 && testimonialList.map((post, index) => (
                                    <div key={index} className="p-10 xl:pr-40 pb-14">
                                        <div className="relative after:content-[''] after:absolute after:bg-skyblue after:w-full after:h-3/4 after:z-0 after:-bottom-10 after:left-8 xl:after:left-16 after:rounded-lg after:opacity-50">
                                            <ItemComponent item={post} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="flex md:hidden flex-row justify-center md:justify-start items-center space-x-3 mt-5">
                                <button
                                    type="button"
                                    onClick={handlePreviousEvent}
                                    className="prev-button rounded-full border border-[#50DCF2] bg-[#FEFCFB] p-3 text-[#999] hover:bg-[#50DCF2] hover:text-black"
                                >
                                    <span className="sr-only">Previous Slide</span>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM17 9H1V7H17V9Z"
                                            fill="black"/>
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleNextEvent}
                                    className="next-button rounded-full border border-[#50DCF2] bg-[#FEFCFB] p-3 text-[#999] hover:bg-[#50DCF2] hover:text-black"
                                >
                                    <span className="sr-only">Next Slide</span>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                                            fill="black"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
}
