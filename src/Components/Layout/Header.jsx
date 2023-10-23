import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Branding,
    DesktopMainMenu,
    Locale,
    MobileMainMenu,
} from 'Layout'
import {
    Bars,
    Home,
} from 'Svg'

const Header = component$(({
    branding,
    currentLocale,
    isRtl,
    locales,
    menuItemBg,
    menuItems,
}) => {

    const isOpen = useSignal(false)

    return <>
        <header>
            <div class="w-full mx-auto px-5 max-w-wide mx-auto flex justify-center items-start">
                <div class="flex w-full lg:w-[calc(100%-72px)]">
                    <Branding {...branding} />
                    <a
                        href={branding.link}
                        class="hidden lg:block w-28 h-full">
                        <Image
                            src={menuItemBg?.image}
                            alt={menuItemBg?.alt}
                            containerClass="relative w-full"
                        />
                        <Home class="relative z-10 -mt-16 mx-auto w-7 aspect-square [&>*]:fill-white [&>*]:stroke-white"/>
                    </a>
                    <div
                        class="py-4 md:py-8 order-first lg:order-2"
                        onClick$={() => isOpen.value = !isOpen.value}
                    >
                        <Bars
                            class='w-8 h-8 text-custom-color2 lg:hidden font-bold cursor-pointer'
                        />
                    </div>
                    <MobileMainMenu
                        menuItems={menuItems}
                        isOpen={isOpen}
                        isRtl={isRtl}
                    />
                    <div class="hidden w-full pe-6 lg:inline-block py-4 md:py-8">
                        <DesktopMainMenu menuItems={menuItems} />
                    </div>
                </div>
                <Locale
                    locales={locales}
                    currentLocale={currentLocale}
                />
            </div>
        </header>
    </>
})

export default Header
