import React from 'react';
import Image from "next/image";

export default function ItemComponent({item}) {
    const {comment, userName, userPosition, avatar} = item;
    return (
        <div
            className="relative flex flex-col py-7 px-8 bg-white rounded-lg shadow-lg z-10">
            <Image
                src={avatar?.sourceUrl}
                alt={userName}
                width={68}
                height={68}
                className="absolute rounded-full -left-9 -top-9"
            />
            <p className="text-[#000] font-medium leading-6 text-base text-[#171616]">
                “{comment}”
            </p>
            <p className="mt-[34px] text-lg font-semibold text-[#171616]">{userName}</p>
            {userPosition && (<p className="text-sm mb-2.5 font-medium text-[#171616]">{userPosition}</p>)}
        </div>
    );
}
