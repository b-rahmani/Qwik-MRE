import {
    component$,
    useStyles$,
    useVisibleTask$,
} from '@builder.io/qwik'
import swiperStyles from 'swiper/css?inline'
import swiperThumbsStyles from 'swiper/css/thumbs?inline'
import swiperFreeModeStyles from 'swiper/css/free-mode?inline'
import swiperNavigationStyles from 'swiper/css/navigation?inline'
import Swiper from 'swiper'
import {
    Navigation,
    Thumbs,
} from 'swiper/modules'
import { Image } from 'Base'

const Slider = component$(({
    relatedItems,
    title,
}) => {

    useStyles$(swiperStyles)
    useStyles$(swiperThumbsStyles)
    useStyles$(swiperFreeModeStyles)
    useStyles$(swiperNavigationStyles)

    useVisibleTask$(() => {
        const thumbsSwiper = new Swiper('.thumbs-swiper', {
            modules: [Thumbs],
            clickable: true,
            slidesPerView: 4,
            spaceBetween: 20,
            freeMode: true,
            watchSlidesProgress: true,
        })

        const mainSwiper = new Swiper('.main-swiper', {
            modules: [Thumbs, Navigation],
            navigation: {
                nextEl: ".product-next",
                prevEl: ".product-prev",
            },
            slidesPerView: 1,
            thumbs: {
                swiper: thumbsSwiper,
            },
        })
    }, {
        strategy: 'document-ready'
    })

    return <>
        <div class="flex-1 p-6 bg-white rounded-2xl shadow overflow-hidden">

            <div class='main-swiper swiper mb-6'>
                <div class='swiper-wrapper'>
                    {
                        relatedItems?.images?.map((item, index) => <div class='swiper-slide'>
                            <Image
                                src={item?.relatedItems?.url}
                                alt={item.title}
                                containerClass="w-full aspect-square rounded-2xl overflow-hidden"
                                priority={index < 1}
                            />
                        </div>)
                    }
                </div>
            </div>

            <div>
                <div class='thumbs-swiper swiper'>
                    <div class='swiper-wrapper'>
                        {
                            relatedItems?.images?.map((item, index) => <div
                                class='swiper-slide'
                                key={item?.relatedItems?.id}
                            >
                                <Image
                                    src={item?.relatedItems?.url}
                                    alt={item.title}
                                    containerClass="w-full aspect-square rounded-2xl overflow-hidden border border-custom-color1"
                                    priority={index < 5}
                                />
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    </>
})

export default Slider
