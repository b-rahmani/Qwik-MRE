import {
    Image,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from 'Base'
import { HeadTitle } from 'Shared'

const ProductsSlider = ({
    products,
    title,
}) => {

    return <section class='px-5 max-w-7xl mx-auto my-4'>
        <HeadTitle title={title} />
        <Swiper
            name='productSwiper'
            containerClass="pb-12"
            paginationClass="active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md"
            config={{
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 40,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                centeredSlides: true,
                breakpoints: {
                    [zero]: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    [xs]: {
                        slidesPerView: 1.5,
                        spaceBetween: 5,
                    },
                    [sm]: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    [md]: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            }}
        >
            {
                products?.map(item => <>
                    <SwiperSlide key={item?.id} class="rounded-xl overflow-hidden">
                        <Image
                            containerClass='rounded-xl overflow-hidden'
                            imageClass="rounded-xl overflow-hidden bg-gray-200 border object-contain"
                            src={item?.relatedItems?.imageUrl}
                        />
                    </SwiperSlide>
                </>)
            }
        </Swiper>
    </section>
}

export default ProductsSlider
