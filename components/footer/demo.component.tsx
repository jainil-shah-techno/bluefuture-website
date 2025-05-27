import Link from "next/link";
import Image from "next/image";
import Container from "../container";

export default function DemoComponent({demoSection, newsLetter, updatedFooterSettings}) {
    let finalDemoSection: any = {};
    let finalNewsLetter: any = {};

    if (updatedFooterSettings) {
        const {demoSection: pageDemoSection, newsLetter: pageNewsLetter} = updatedFooterSettings;

        finalDemoSection = Object.assign({}, demoSection, pageDemoSection);
        finalNewsLetter = Object.assign({}, newsLetter, pageNewsLetter);
        finalDemoSection.secondaryButton.title = '';
        finalNewsLetter.visibleSection = false;
    } else {
        finalDemoSection = Object.assign({}, demoSection);
        finalNewsLetter = Object.assign({}, newsLetter);
    }

    return (
        <>
            {finalDemoSection && !!finalDemoSection.visibleSection && (
                <div className="max-w-full mx-auto">
                    <div
                        className="d-flex rounded-lg md:rounded-3xl mx-auto text-center bg-no-repeat bg-navyblue bg-[length:300%] bg-left-bottom md:bg-center md:bg-cover px-4 md:px-0 pb-20 py-10 md:py-20"
                        style={{backgroundImage: `url(${finalDemoSection?.backgroundImage?.sourceUrl})`}}
                    >
                        <div className="max-w-xl mx-auto">
                            {finalDemoSection?.logo?.sourceUrl && (
                                <div className="flex mx-auto items-center justify-center justify-items-center mb-10 w-28 h-auto">
                                    <Image
                                        src={finalDemoSection?.logo?.sourceUrl}
                                        className="w-28 h-auto"
                                        alt="logo"
                                        width={90}
                                        height={100}
                                    />
                                </div>
                            )}
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 text-white">
                                {finalDemoSection?.title}
                            </h2>
                            <p className="text-base font-medium text-white">
                                {finalDemoSection?.subTitle}
                            </p>
                            <div className="md:flex justify-center mt-10 md:my-10">
                                {finalDemoSection?.primaryButton && finalDemoSection?.primaryButton?.href && finalDemoSection?.primaryButton?.title && (
                                    <div
                                        className="flex items-center justify-center md:justify-start w-auto rounded-lg px-4 py-2 mx-2"
                                        style={{
                                            backgroundColor:
                                            finalDemoSection?.primaryButton?.backgroundColor,
                                        }}
                                    >
                                        <div className="text-left ml-3">
                                            <Link
                                                href={finalDemoSection?.primaryButton?.href}
                                                className="flex items-center justify-center h-12 px-4 text-base font-medium text-center transition-colors duration-300 transform rounded-md lg:h-10 bg-primary hover:bg-primary/70"
                                                style={{color: finalDemoSection?.primaryButton?.title === "Try EzyParts" ? "white" : "#000C28"}}
                                            >
                                                {finalDemoSection?.primaryButton?.title}
                                            </Link>
                                        </div>
                                    </div>
                                )}
                                {finalDemoSection?.primaryButton && finalDemoSection?.primaryButton?.href && finalDemoSection?.primaryButton?.title && finalDemoSection?.secondaryButton && finalDemoSection?.secondaryButton?.href && finalDemoSection?.secondaryButton?.title && (
                                    <p
                                        className="flex items-center justify-center h-12 px-4 py-2 mx-2 my-auto text-base font-medium text-center"
                                        style={{color: "#A5A5A5"}}
                                    >
                                        OR
                                    </p>
                                )}
                                {finalDemoSection?.secondaryButton && finalDemoSection?.secondaryButton?.href && finalDemoSection?.secondaryButton?.title && (
                                    <div
                                        className="flex items-center justify-center md:justify-start w-auto rounded-lg px-4 py-2 mx-2"
                                        style={{
                                            backgroundColor:
                                            finalDemoSection?.secondaryButton?.backgroundColor,
                                        }}
                                    >
                                        <div className="text-left ml-3">
                                            <Link
                                                href={finalDemoSection?.secondaryButton?.href}
                                                className="flex items-center justify-center h-12 px-4 text-base font-medium text-center transition-colors duration-300 transform rounded-md lg:h-10 bg-primary hover:bg-primary/70"
                                                style={{color: "#000C28"}}
                                            >
                                                {finalDemoSection?.secondaryButton?.title}
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {finalNewsLetter && !!finalNewsLetter.visibleSection && (
                <div className="relative">
                    <div className="w-11/12 md:w-3/4 m-auto rounded-lg -mt-10 md:-mt-16">
                        <div className="w-full flex md:h-32 items-center justify-center bg-white rounded-xl">
                            <div className="p-4 d-flex rounded-lg mx-auto bg-center text-center">
                                <p
                                    className="text-xl font-semibold mb-4"
                                    style={{color: "#000C28"}}
                                >
                                    {finalNewsLetter?.title}
                                </p>
                                <div className="relative md:flex justify-center space-x-3">
                                    <span className="absolute inset-y-1 left-12 flex items-center pl-2"></span>
                                    <input
                                        className="w-full md:w-[365px] rounded-lg shadow-lg border bg-white p-2 h-10"
                                        type="email"
                                        placeholder="Your email address"
                                    />
                                    {finalNewsLetter?.primaryButton && (
                                        <button
                                            className="p-2 md:p-0 mt-2 md:mt-0 w-32 rounded-lg text-sm border font-medium text-black"
                                            style={{
                                                backgroundColor:
                                                finalNewsLetter?.primaryButton?.backgroundColor,
                                            }}
                                        >
                                            {finalNewsLetter?.primaryButton?.title}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
