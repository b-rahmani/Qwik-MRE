import { DesktopSubMenu } from 'Layout'

const DesktopMainMenu = ({ menuItems }) => {

    return <>
        <ul class='hidden w-full lg:flex items-center justify-start flex-wrap gap-2'>
            {
                menuItems?.map((item, index) => <>
                    <li
                        key={item?.id}
                        style={{ animationDelay: (index + 1) * 150 + 'ms !important', animationFillMode: 'forwards !important', visibility: 'hidden' }}
                        class="group animate-fade-menu relative z-0 hover:z-10">
                        {/* <a
                            href={item?.url}
                            class="font-semibold text-base lg:text-sm xl:text-base text-center block text-custom-color3 px-3 lg:px-2 py-3 select-none after:absolute after:content-[''] after:bg-custom-color1 after:bottom-0 after:start-0 after:end-0 after:mx-auto after:w-0 after:h-[3px] hover:text-custom-color2 hover:after:w-full after:transition-all after:duration-700 "
                        >
                            {item?.title}
                        </a> */}

                        <a
                            href={item?.url}
                            class="relative -z-10 flex py-2 px-2 items-center justify-center overflow-hidden rounded-xl bg-transparent group-hover:text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-custom-color1 before:duration-500 before:ease-out group-hover:shadow-custom-color1 group-hover:before:h-56 group-hover:before:w-[105%] duration-300"
                        >
                            <span class="relative z-10 text-base font-semibold">{item?.title}</span>

                        </a>
                        {
                            item?.relatedItems?.children?.length > 0 && <DesktopSubMenu items={item?.relatedItems?.children} />
                        }
                    </li>
                </>
                )
            }
        </ul>
    </>
}

export default DesktopMainMenu
