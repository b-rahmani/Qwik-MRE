const FooterLinks = ({
    items,
    title,
}) => {
    
    return <>
        <div class="lg:col-span-1">
            <b class="relative block text-md pb-4 mb-4 after:absolute after:bottom-0 after:start-0 after:w-20 md:after:w-1/2 after:h-[2px] after:bg-white">
                {title}
            </b>
            <ul>
                {
                    items?.map(item => <>
                        <li
                            class="my-2"
                            key={item?.id}
                        >
                            <a
                                href={item?.link}
                                title={item?.title}
                                aria-label={item?.title}
                                class="hover:ps-1.5 hover:text-custom-color11 transition-all"
                            >
                                {item?.title}
                            </a>
                        </li>
                    </>)
                }
            </ul>
        </div>
    </>
}

export default FooterLinks
