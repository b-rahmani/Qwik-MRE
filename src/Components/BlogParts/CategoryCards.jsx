import { component$ } from '@builder.io/qwik'
import { CategoryCard } from 'Shared'
import {
    Image,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from 'Base'

const CategoryCards = component$(({
    active,
    categories,
    localePathPrefix,
}) => {

    return <>
        <Swiper
            name='BlogCategorySwiper'
            containerClass="pb-12"
            paginationClass="active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md"
            config={{
                breakpoints: {
                    [zero]: {
                        slidesPerView: 1.2,
                        spaceBetween: 5,
                    },
                    [xs]: {
                        slidesPerView: 2.2,
                        spaceBetween: 5,
                    },
                    [sm]: {
                        slidesPerView: 3.2,
                        spaceBetween: 10,
                    },
                    [md]: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                },
            }}
        >
            {
                categories?.map(category => <>
                    <SwiperSlide key={category?.id}>
                        <CategoryCard
                            category={category}
                            active={active}
                            localePathPrefix={localePathPrefix}
                        />
                    </SwiperSlide>
                </>)
            }
        </Swiper>
    </>
})

export default CategoryCards
