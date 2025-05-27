import Image from "next/image";
import Link from "next/link";

export default function LogosComponent({logo, plans}) {
    return (
        <div className="md:flex md:flex-wrap items-center justify-between pt-20 pb-5">
            <div className="md:w-1/3 flex justify-start mb-6 md:mb-0">
                <Image src={logo?.sourceUrl} alt="Logo" className="mix-blend-darken" width="390" height="100"/>
            </div>
            <div className="md:w-3/5 flex justify-end">
                <div className="w-full bg-white rounded-2xl md:rounded-full flex shadow-lg bg-[#000C28]">
                    <ul className="w-full md:flex items-center align-center text-center md:justify-between py-5 px-4 md:px-12 lg:px-24">
                        {plans && plans.map((plan, index) => (
                            <li key={index} className="py-2 md:py-0">
                                <Link href={plan.href}
                                      className="text-lg text-white hover:text-[#50DCF2] text-center font-bold text-lightBlue-600">{plan.title}</Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}
