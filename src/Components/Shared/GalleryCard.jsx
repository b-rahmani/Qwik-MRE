import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { Image } from 'Base'
import { ArrowLeft } from 'Svg'
import { GallerySwiper } from 'Shared'

const GalleryCard = component$(({
    items,
    readMore,
}) => {

    const galleryIsOpen = useSignal(false)

    return <>
        {
            items?.map(item => <>
                <div
                    class="p-6 border border-gray-200 rounded-xl p-3 group cursor-pointer"
                    dir="rtl"
                    key={item?.id}
                    onClick$={() => galleryIsOpen.value = true}
                >
                    <div>
                        <Image
                            src={item?.relatedItems?.imageUrl}
                            alt={item?.title}
                            containerClass='w-full aspect-[3/2] rounded-xl overflow-hidden'
                            imageClass='group-hover:scale-110 duration-500 transition-all'
                        />
                    </div>
                    <h3 class="line-clamp-1 my-6 text-xl font-bold">
                        <div class='group-hover:text-custom-color2 transition-all'>
                            {item?.title}
                        </div>
                    </h3>
                    <p class="h-[70px] line-clamp-3 text-md leading-6">
                        {item?.description}
                    </p>
                </div >
                <GallerySwiper
                    gallery={item}
                    galleryIsOpen={galleryIsOpen}
                />
            </>
            )
        }
    </>
})

export default GalleryCard
