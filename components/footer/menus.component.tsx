import Link from "next/link";

export default function MenusComponent({otherLinks, bookDemoGroup}) {

    const toggleFooterMenu = (event) => {
        var parent = event.currentTarget.parentNode.parentNode;
        var footermenucontent = parent.getElementsByClassName('footermenucontent');
        if(footermenucontent[0].classList.contains('active')){
            footermenucontent[0].classList.remove('active');
        } else {
            footermenucontent[0].classList.add('active');
        }
    }

    return (
        <div className="w-full relative">
            <div className="gap-8 md:grid md:grid-cols-12 lg:flex justify-between mb-6 md:mb-0">
                {otherLinks.map((item, index) => (
                <div className={`col-span-3 mb-6 md:mb-0 text-center md:text-left`} key={index}>
                    <div className="flex items-center justify-center md:block uppercase text-blueGray-500 text-xl font-semibold mb-2 text-[#222222]">
                        {item.title}
                        <svg onClick={event => toggleFooterMenu(event)} className="footer_link md:hidden ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <ul className="footermenucontent list-unstyled">
                        {item && item.links.map((link, j) =>(
                            <li key={j}>
                                <Link className="font-normal block pb-2 text-lg text-navyblue hover:text-[#50DCF2]"
                                   href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
            <div className="book_demo_section md:absolute w-full md:w-[252px] h-auto bottom-0 right-0 rounded-xl text-center py-5 px-4 bg-navyblue text-white">
                <div className="mt-auto grow">
                    <div className="text-md font-semibold">{bookDemoGroup.bookDemoHeading}</div>
                    <div className="flex justify-between items-center mt-4 pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                        <path d="M27.7077 6.33341H24.791V4.87508C24.791 4.48831 24.6374 4.11737 24.3639 3.84388C24.0904 3.57039 23.7195 3.41675 23.3327 3.41675C22.9459 3.41675 22.575 3.57039 22.3015 3.84388C22.028 4.11737 21.8743 4.48831 21.8743 4.87508V6.33341H13.1243V4.87508C13.1243 4.48831 12.9707 4.11737 12.6972 3.84388C12.4237 3.57039 12.0528 3.41675 11.666 3.41675C11.2792 3.41675 10.9083 3.57039 10.6348 3.84388C10.3613 4.11737 10.2077 4.48831 10.2077 4.87508V6.33341H7.29102C6.13069 6.33341 5.0179 6.79435 4.19742 7.61482C3.37695 8.43529 2.91602 9.54809 2.91602 10.7084V28.2084C2.91602 29.3687 3.37695 30.4815 4.19742 31.302C5.0179 32.1225 6.13069 32.5834 7.29102 32.5834H27.7077C28.868 32.5834 29.9808 32.1225 30.8013 31.302C31.6217 30.4815 32.0827 29.3687 32.0827 28.2084V10.7084C32.0827 9.54809 31.6217 8.43529 30.8013 7.61482C29.9808 6.79435 28.868 6.33341 27.7077 6.33341ZM29.166 28.2084C29.166 28.5952 29.0124 28.9661 28.7389 29.2396C28.4654 29.5131 28.0945 29.6667 27.7077 29.6667H7.29102C6.90424 29.6667 6.53331 29.5131 6.25982 29.2396C5.98633 28.9661 5.83268 28.5952 5.83268 28.2084V18.0001H29.166V28.2084ZM29.166 15.0834H5.83268V10.7084C5.83268 10.3216 5.98633 9.95071 6.25982 9.67722C6.53331 9.40373 6.90424 9.25008 7.29102 9.25008H10.2077V10.7084C10.2077 11.0952 10.3613 11.4661 10.6348 11.7396C10.9083 12.0131 11.2792 12.1667 11.666 12.1667C12.0528 12.1667 12.4237 12.0131 12.6972 11.7396C12.9707 11.4661 13.1243 11.0952 13.1243 10.7084V9.25008H21.8743V10.7084C21.8743 11.0952 22.028 11.4661 22.3015 11.7396C22.575 12.0131 22.9459 12.1667 23.3327 12.1667C23.7195 12.1667 24.0904 12.0131 24.3639 11.7396C24.6374 11.4661 24.791 11.0952 24.791 10.7084V9.25008H27.7077C28.0945 9.25008 28.4654 9.40373 28.7389 9.67722C29.0124 9.95071 29.166 10.3216 29.166 10.7084V15.0834Z" fill="white"/>
                        </svg>
                        <Link href={bookDemoGroup.bookDemoLink} title="">
                            <button className="py-2 px-4 w-auto text-center text-black bg-skyblue rounded-lg font-semibold text-sm" type="button">
                            {bookDemoGroup.bookDemoBtnText}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
