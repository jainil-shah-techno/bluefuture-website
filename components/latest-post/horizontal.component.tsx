import React from 'react';
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function HorizontalComponent({data}) {
    const {author, categories, slug, title, date, featuredImage, excerpt} = data?.node
    const {avatar, name, slug: authorSlug} = author?.node;

    const currentDate = moment(date, "YYYY-MM-DD");

    return (
        <div className="group sm:flex md:space-x-6 bg-white bg-opacity-50 border-b-2 pb-10">
            {featuredImage?.node?.sourceUrl && (
                <Image src={featuredImage?.node?.sourceUrl}
                       alt={title} loading="lazy" width="1000" height="667"
                       className="h-56 md:h-full w-full md:w-5/12 object-cover object-top rounded-lg transition duration-500"/>
            )}

            <div className="w-full md:w-7/12">
                <div className="space-y-2">
                    <div className="space-y-4">
                        {categories && categories?.edges.length > 0 && categories?.edges.map((item, index) => (
                            <span key={index}
                                  className="bg-[#50DCF2] p-1.5 rounded-full font-bold text-[#0490A6] text-[10px] leading-4">{item?.node?.name}</span>
                        ))}
                        <Link href={"/blog/" + slug}>
                            <h4 className="text-2xl font-bold text-[#191919] mt-4">{title}</h4>
                        </Link>
                        <div className="text-gray-600 font-normal text-[#292929] text-base text-justify"
                             dangerouslySetInnerHTML={{__html: excerpt}}></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 pt-6">
                            <div className="mr-2">
                                <Image className="rounded-full" src="https://rcreators.in/5iq/wp-content/uploads/2023/01/mark-face.png"
                                       width="24" height="24"
                                       alt={name}/>
                            </div>
                            <div className="text-sm font-light text-[#292929]">
                            Mark Alfred
                            </div>
                            <div
                                className="text-sm font-light text-[#757575]">{currentDate.format("Do MMM, yyyy")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
