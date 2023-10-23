import { component$ } from '@builder.io/qwik'
import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from 'Base'
import { ProductCard } from 'Shared'

const Related = component$(({
    latestProducts,
    localePathPrefix,
    productsTexts,
}) => {

    return <>

        <div class="max-w-7xl mx-auto px-5 my-10">
            <div class="font-black text-custom-color2 text-lg md:text-2xl">
                {productsTexts?.relatedProducts}
            </div>
            <Swiper
                name='ProductsSwiper'
                containerClass="mb-20 pt-5 pb-16"
                paginationClass="active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md active-bullet:transition-all active-bullet:duration-300 bullet:transition-all bullet:duration-all"
                config={{
                    breakpoints: {
                        [zero]: {
                            slidesPerView: 1.2,
                            spaceBetween: 5,
                        },
                        [sm]: {
                            slidesPerView: 2.2,
                            spaceBetween: 10,
                        },
                        [md]: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    },
                }}
            >
                {
                    latestProducts?.map(product => <>
                        <SwiperSlide key={product?.id}>
                            <ProductCard
                                product={product}
                                readMoreText={productsTexts?.seeProduct}
                                localePathPrefix={localePathPrefix}
                            />
                        </SwiperSlide>
                    </>)
                }
            </Swiper>
        </div>
    </>
})

export default Related
