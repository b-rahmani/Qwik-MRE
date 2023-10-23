import {
    $,
    component$,
} from '@builder.io/qwik'
import { Image } from 'Base'

const ProbioticMobileTabs = component$(({
    activeItemId,
    bg,
    defaultClass,
    imageAlt,
    items,
    newRotate,
    responsiveMaps,
    tabHandler,
}) => {

    return <>
        <div class="lg:hidden w-full">
            <div
                id='probiotic'
                class="relative mx-auto xl:mx-0 xs:max-w-[360px] sm:max-w-[400px] lg:max-w-[500px] w-[calc(100%-96px)] aspect-square aspect-square mt-10 lg:mt-0"
                dir="ltr"
            >
                <Image
                    src={bg}
                    containerClass="absolute -z-10 w-full aspect-square -rotate-90"
                    alt={imageAlt}
                />

                <div
                    style={{ transform: `rotate(${(newRotate - 4) * 90}deg)` }}
                    class={`relative w-full aspect-square me-0 rounded-full transition-all duration-1000`}
                >

                    {items.map((ActiveItem, itemIndex) => (
                        <div
                            key={ActiveItem.id}
                            style={{
                                transform: `rotate(${newRotate * -90}deg)`,
                            }}
                            class={`${defaultClass} ${responsiveMaps[itemIndex].itemPosition} cursor-pointer transition-all duration-1000`}
                            onClick$={() => tabHandler(ActiveItem)}
                        >
                            <div class="h-full flex flex-col gap-2 items-center justify-center px-2">
                                <div
                                    class={`w-16 xs:w-24 aspect-square flex justify-center items-center border border-8 border-gray-100 rounded-full shadow-lg transition-all duration-500 ${activeItemId == ActiveItem.id ? "bg-custom-color1" : "bg-gray-100"}`}
                                    style={{
                                        background: `#39b54a`,
                                    }}
                                >
                                    {activeItemId == ActiveItem.id ?
                                        <Image
                                            src={ActiveItem.activeTabImage}
                                            containerClass="w-6 xs:w-11 aspect-square"
                                            alt={ActiveItem.tabTitle}
                                            priority
                                        />
                                        :
                                        <Image
                                            src={ActiveItem.tabImage}
                                            containerClass="w-6 xs:w-11 aspect-square"
                                            alt={ActiveItem.tabTitle}
                                            priority
                                        />}
                                </div>
                                <span class="bg-slate-50 rounded-lg px-2 text-xs">{ActiveItem.tabTitle}</span>
                            </div>
                        </div>
                    ))}

                </div>
                <div
                    class="absolute w-20 xs:w-24 aspect-square start-1/2 end-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    <Image
                        containerClass={`w-full aspect-square`}
                        src={items.find(el => el.id === activeItemId).activeTabBigImage}
                    />
                </div>
            </div>
        </div>
    </>
})

export default ProbioticMobileTabs
