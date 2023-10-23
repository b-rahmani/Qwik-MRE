import {
    $,
    component$,
} from '@builder.io/qwik'
import { Image } from 'Base'

const ProbioticDesktopTabs = component$(({
    activeItemId,
    bg,
    defaultClass,
    imageAlt,
    items,
    newRotate,
    probiotic,
    tabHandler,
}) => {

    const maps = [
        {
            itemPosition: "top-[calc(50%-50px)] start-[-50px]",
            boxPosition: "-translate-y-[51.5%] lg:translate-x-[80%]"
        },
        {
            itemPosition: "bottom-[-70px] end-0 start-0 mx-auto",
            boxPosition: "-translate-y-[65%] translate-x-[78%]"
        },
        {
            itemPosition: "top-[calc(50%-50px)] end-[-50px]",
            boxPosition: "-translate-y-[77%] translate-x-[80%]"
        },
        {
            itemPosition: "top-[-60px] end-0 start-0 mx-auto",
            boxPosition: "-translate-y-[65%] translate-x-[81%]"
        },
    ]

    return <>
        <div class={`hidden lg:block absolute -z-10 top-1/2 end-1/2 start-1/2 w-[109px] lg:w-[21vw] xl:w-[316px] h-[207px] lg:h-[109px] rounded-s-full bg-gray-200 
        ${maps[probiotic.find(el => el.id === activeItemId).order].boxPosition}`}
        >
        </div>
        <div
            id='probiotic'
            class="basis-12/12 hidden lg:block w-full lg:basis-5/12 -rotate-[90deg] lg:rotate-0">

            <div
                class="relative mx-auto xl:mx-0 sm:max-w-[400px] lg:max-w-[500px] w-[calc(100%-96px)] aspect-square aspect-square mt-10 lg:mt-0"
                dir="ltr"
            >
                <Image
                    src={bg}
                    containerClass="absolute top-0 -z-10 w-full aspect-square"
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
                            class={`${defaultClass} ${maps[itemIndex].itemPosition} cursor-pointer transition-all duration-1000`}
                            onClick$={$(() => tabHandler(ActiveItem))}
                        >
                            <div class="h-full flex flex-col gap-2 items-center justify-center px-2">
                                <div
                                    class={`w-24 aspect-square flex justify-center items-center border border-8 border-gray-100 rounded-full transition-all duration-500 shadow-lg ${activeItemId == ActiveItem.id ? " bg-custom-color1" : " bg-gray-100"}`}
                                    style={{
                                        background: `#39b54a`,
                                    }}
                                >
                                    {activeItemId == ActiveItem.id ?
                                        <Image
                                            src={ActiveItem.activeTabImage}
                                            containerClass="w-11 aspect-square"
                                            alt={ActiveItem.tabTitle}
                                        />
                                        :
                                        <Image
                                            src={ActiveItem.tabImage}
                                            containerClass="w-11 aspect-square"
                                            alt={ActiveItem.tabTitle}
                                        />}
                                </div>
                                <span class="bg-slate-50 rounded-lg px-2 text-sm font-bold">{ActiveItem.tabTitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div class={["absolute w-32 aspect-square start-1/2 end-1/2 top-1/2", "-translate-x-1/2 -translate-y-1/2"]}>

                    <Image
                        containerClass={`w-full aspect-square`}
                        src={items.find(el => el.id === activeItemId).activeTabBigImage}
                    />
                </div>
            </div>
        </div>

    </>
})

export default ProbioticDesktopTabs
