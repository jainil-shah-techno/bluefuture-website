import React from 'react';
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function PostComponent({data}) {
    const {author, categories, slug, title, date, featuredImage} = data.node;
    let avatar, name, authorSlug = null;
    if (author) {
        avatar = author?.node?.avatar;
        name = author?.node?.name;
        authorSlug = author?.node?.slug;
    }
    
    const currentDate = moment(date, "YYYY-MM-DD");

    return (
        <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center mb-5">
            {featuredImage?.node?.sourceUrl && (
                <Image className="rounded-lg w-full h-auto" src={featuredImage?.node?.sourceUrl}
                       width="340" height="170"
                       alt={title}/>
            )}
            <div className="pt-[20px] mb-2">
                {categories && categories?.edges.length > 0 && categories?.edges.map((item, index) => (
                    <span key={index}
                          className="bg-[#50DCF2] w-auto p-1.5 rounded-full font-bold text-[#292929] text-[10px]">{item?.node?.name}</span>
                ))}
                <div className="pt-[10px]">
                    <Link href={"/blog/" + slug}>
                        <h3 className="font-bold text-2xl text-[#191919] font-medium text-xl">
                            {title}
                        </h3>
                    </Link>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 pt-6">
                            {author && (
                                <>
                                    <div className="mr-2">
                                        <Image className="rounded-full" src="https://rcreators.in/5iq/wp-content/uploads/2023/01/mark-face.png"
                                               width="24" height="24"
                                               alt="Mark Alfred"/>
                                    </div>
                                    <div className="text-sm font-light text-[#292929]">
                                    Mark Alfred
                                    </div>
                                </>
                            )}
                            <div
                                className="text-sm font-light text-[#757575]">{currentDate.format("Do MMM, yyyy")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
