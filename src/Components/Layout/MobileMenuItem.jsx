import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { MobileSubMenu } from 'Layout'

const MobileMenuItem = component$(({
    currentLocale,
    index,
    isRtl,
    isSideMenuOpen,
    item,
}) => {

    const isSubMenuOpen = useSignal(false)

    return <>
        <div class="flex justify-between items-center">
            <a
                href={item?.url}
                key={item?.id}
                class={[
                    `w-fit text-custom-color2 p-5 font-bold duration-700 after:absolute after:content-[''] after:bg-custom-color1`,
                    `after:bottom-0 after:start-0 after:w-0 after:h-1 hover:after:w-full after:transition-all after:duration-700`,
                    `delay-[${index * 1_000_000}ms] ${isSideMenuOpen.value ? 'translate-x-0' : `${isRtl ? 'translate-x-[100vw]' : 'translate-x-[-100vw]'}`}`]}
            >
                {item?.title}
            </a>
            {
                item?.relatedItems?.children.length > 0 &&
                <div class="p-3 text-4xl text-custom-color1" onClick$={() => isSubMenuOpen.value = !isSubMenuOpen.value}>
                    <span class='cursor-cell'>
                        {isSubMenuOpen.value ? <span>-</span> : <span>+</span>}
                    </span>
                </div>
            }
        </div>
        {item.relatedItems.children.length > 0 &&
            <MobileSubMenu
                isSubMenuOpen={isSubMenuOpen}
                items={item.relatedItems.children}
            />
        }
    </>
})

export default MobileMenuItem
