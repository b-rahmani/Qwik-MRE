import { Image } from 'Base'
import { ArrowLeft } from 'Svg'

const ProbioticContent = ({
    activeItemId,
    items,
    probiotic,
    responsiveMaps,
}) => {

    const clickedItem = items.find(el => el.id === activeItemId)

    return <>
        <div class="relative basis-12/12 md:basis-7/12 lg:ps-20 mt-20 lg:mt-0">

            <div class={`hidden sm:block lg:hidden absolute -z-10 -top-[150px] end-0 start-0 mx-auto w-[109px] h-[227px] rounded-t-full bg-gray-200 ${responsiveMaps[probiotic.find(el => el.id === activeItemId).order].boxPosition}`}
            ></div>

            <div class="relative z-0 bg-white shadow-[0px_6px_21px_0px_rgba(0,0,0,0.3)] rounded-2xl p-4 md:p-8 lg:p-20">
                <Image
                    src={activeItemId && clickedItem?.contentBackground}
                    alt={activeItemId && clickedItem?.contentSubTitle}
                    containerClass="absolute inset-0 opacity-20 -z-10 w-full h-full"
                    imageClass="w-full h-full object-fill mx-auto"
                />
                <h3
                    class='py-1.5 px-4 rounded-xl font-black text-xl md:text-2xl text-custom-color2 text-center lg:leading-10 shadow border border-custom-color1 select-none w-fit'
                >
                    {activeItemId && clickedItem?.contentTitle}
                </h3>
                <h4 class="py-1.5 px-4 rounded-xl text-lg my-4 text-center shadow border border-custom-color2 select-none w-fit">
                    {activeItemId && clickedItem?.contentSubTitle}
                </h4>
                <div class="shadow  select-none w-fit bg-white/70 py-2 px-4 rounded-xl border border-custom-color1">
                    <p class='line-clamp-3 w-full h-full'>{activeItemId && clickedItem?.contentSummary}</p>

                </div>
                <Image
                    src={activeItemId && clickedItem?.contentImage}
                    alt={activeItemId && clickedItem?.contentSubTitle}
                    containerClass="w-full aspect-[4/1] md:max-h-[120px] text-center mt-10"
                    imageClass="w-full h-full object-contain mx-auto"
                />
                <div class="text-center mt-6">
                    <a
                        href={activeItemId && clickedItem?.contentCtaLink}
                        class="inline-flex gap-2 items-center justify-center text-xs md:text-base font-bold bg-gray-100 mx-auto px-5 py-2 rounded-md text-custom-color1 hover:bg-custom-color1 hover:text-white hover:gap-4 transition-all"
                        aria-label={activeItemId && clickedItem?.contentCtaAriaLabel}
                    >
                        <span>
                            {activeItemId && clickedItem?.contentCtaText}
                        </span>
                        <ArrowLeft
                            class="w-5 aspect-square"
                        />
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default ProbioticContent
