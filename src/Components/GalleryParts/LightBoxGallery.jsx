import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { Image } from 'Base'
import {
    Close,
    Magnifying,
} from 'Svg'

const LightBoxGallery = component$(({
    items,
    title,
}) => {

    const isOpenLightBox = useSignal(false)
    const selectedImage = useSignal(0)

    return <>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5 md:mt-10">
            {
                items?.map((item, index) => <>
                    <div
                        class="w-full h-full relative overflow-hidden group"
                        key={item?.id}
                        onClick$={() => {
                            isOpenLightBox.value = !isOpenLightBox.value
                            selectedImage.value = index
                        }}
                    >
                        <Image
                            src={item?.relatedItems?.url}
                            containerClass="w-full aspect-[2/1] cursor-pointer"
                            alt={title || item?.relatedItems?.imageTitle}
                        />
                        <div class="w-full h-full absolute z-10 bg-slate-950/40 bottom-0 md:-bottom-full group-hover:bottom-0 transition-all duration-300">
                            <Magnifying class="absolute w-8 aspect-square -translate-x-1/2 -translate-y-1/2 inset-y-1/2 inset-x-1/2 text-gray-100" />
                        </div>
                    </div>
                </>)
            }
            <div
                class={`fixed z-50 top-0 start-0 w-full h-full bg-black/80 p-5 ${isOpenLightBox.value ? ' ' : ' hidden'}`}
                onClick$={() => { isOpenLightBox.value = !isOpenLightBox.value }}
            >
                <Close
                    class="w-10 aspect-square rounded-full border border-slate-50 p-1 text-slate-50 cursor-pointer"
                    onClick$={() => { isOpenLightBox.value = !isOpenLightBox.value }}
                />
                <Image
                    src={items?.[selectedImage.value]?.relatedItems?.url}
                    containerClass="pt-5 pb-16 text-center mx-auto max-w-full md:max-w-[70vw] aspect-[2/1]"
                    alt={title || items?.[selectedImage.value]?.relatedItems?.imageTitle}
                />
            </div>
        </div>
    </>
})

export default LightBoxGallery
