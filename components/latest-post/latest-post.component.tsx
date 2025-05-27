import React from 'react';
import Slider from "react-slick";
import Wrapper from "../wrapper";
import Container from "../container";
import PostComponent from "./post.component";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function LatestPostComponent({posts}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        ],
    };

    return (
        <Wrapper className="bg-[#fff] footer-wrapper pb-12">
            <Container className="py-[60px]">
                <h2 className="text-center font-semibold text-2xl md:text-3xl text-[#171616]">
                    Keep up to date with our latest blog
                </h2>
                <Slider {...settings} className="flex flex-col md:flex-row justify-center items-center py-16 pb-8">
                    {posts && posts.length > 0 && posts.map((post, index) => (
                        <div key={index} className="md:px-6">
                            <PostComponent data={post}/>
                        </div>
                    ))}
                </Slider>
            </Container>
        </Wrapper>
    );
}
