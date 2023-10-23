const MobileSubMenu = ({
    isSubMenuOpen,
    items,
}) => {

    return <>
        <ul class={`${isSubMenuOpen.value ? ' max-h-full ' : ' max-h-0'} overflow-hidden transition-all duration-300 p-0 bg-gray-200 w-full`}>
            {
                items?.map(item =>
                    <li
                        class='py-2 px-4 border-dashed border-b border-custom-color11 last:border-0'
                        key={item.id}
                    >
                        <a
                            href={item.url}
                        >
                            {item?.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </>

}

export default MobileSubMenu
