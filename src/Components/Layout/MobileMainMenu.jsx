import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'
import { MobileMenuItem } from 'Layout'
import { BackDrop } from 'Shared'
import { Close } from 'Svg'

const MobileMainMenu = component$(({
    currentLocale,
    isOpen,
    isRtl,
    menuItems,
}) => {

    const closeMenuHandler = $(() => {
        isOpen.value = !isOpen.value
    })

    useVisibleTask$(({ track }) => {
        track(() => isOpen.value)
        if (isOpen.value == true) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'scroll'
        }
    }, {
        strategy: 'document-ready'
    })

    return <>
        {isOpen.value &&
            <BackDrop click={closeMenuHandler} />
        }

        <div class={`lg:hidden overflow-y-scroll w-[90%] max-w-[300px] fixed bg-white top-0 start-0 h-[100vh] z-50 transition duration-300 divide-y ${isOpen.value ? "translate-x-0" : `${isRtl ? 'translate-x-full' : '-translate-x-full'}`} 
        `}>
            <div class="py-5 px-3"
                onClick$={() => isOpen.value = false}
            >
                <Close class="w-10 h-10 text-custom-color1 cursor-pointer ms-auto"/>
            </div>
            {
                menuItems?.map((
                    item,
                    index,
                ) => <MobileMenuItem
                        isSideMenuOpen={isOpen}
                        isRtl={isRtl}
                        index={index}
                        item={item}
                    />
                )
            }
        </div>

    </>

})

export default MobileMainMenu
