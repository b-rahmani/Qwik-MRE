const DesktopSubMenu = ({ items }) => {

    return <>
        <ul class="invisible group-hover:visible translate-y-[50%] group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:h-fit absolute z-50 w-full sm:w-[300px] bg-gray-100 start-0 top-12 rounded-lg shadow-lg text-gray-600 overflow-hidden">
            {
                items?.map(item =>
                    <li
                        key={item?.id}
                        class="relative z-30 overflow-hidden hover:bg-custom-color1 hover:text-white transition-all"
                    >
                        <a
                            class='px-5 py-3 block'
                            href={item?.url ?? '#'}
                        >
                            {item?.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </>
}

export default DesktopSubMenu
