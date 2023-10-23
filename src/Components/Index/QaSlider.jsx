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
import { useQuestionUrl } from 'Questions'
import {
    HeadTitle,
    RichText,
} from 'Shared'

const QaSlider = component$(({
    items,
    questions,
    readMoreLabel,
    readMoreLink,
    readMoreText,
    title,
}) => {

    return <>
        <section>
            <div class="max-w-7xl mx-auto px-5 pb-10 md:pb-0">
                <HeadTitle title={title} />
                <div>
                    <Swiper
                        name='QASwiper'
                        containerClass="pb-12"
                        paginationClass="active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md"
                        config={{
                            breakpoints: {
                                [zero]: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 10,
                                },
                                [sm]: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 15,
                                },
                                [md]: {
                                    slidesPerView: 3,
                                    spaceBetween: 45,
                                },
                            },
                        }}
                    >
                        {questions?.data?.map(item => <>
                            <SwiperSlide key={item?.id}>
                                <a
                                    href={useQuestionUrl(item.slug)}
                                    class=" grid grid-cols-1 gap-4 bg-white shadow-lg mx-1.5 px-4 py-5 rounded-2xl border border-gray-100">
                                    <p class='h-14 lg:h-10'>
                                        <strong class="w-full line-clamp-2">{item?.title}</strong>
                                    </p>
                                    <RichText
                                        class="text-sm text-custom-color3 text-justify h-[200px] overflow-y-hidden"
                                        content={item.relatedItems?.content} />
                                </a>
                            </SwiperSlide>
                        </>)}
                    </Swiper>

                </div>
                {/* <div class="text-end">
                    <a
                        href={readMoreLink}
                        aria-label={readMoreLabel}
                        class="text-sm text-custom-color3 hover:text-custom-color1 transition-all"
                    >
                        {readMoreText}
                    </a>
                </div> */}
            </div>
        </section>
    </>
})

export default QaSlider
