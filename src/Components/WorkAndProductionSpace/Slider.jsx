import { component$ } from '@builder.io/qwik'
import {
    Image,
    Swiper,
    SwiperSlide,
} from 'Base'
import {
    ChevronLeft,
    ChevronRight,
} from 'Svg'

const Slider = component$(({
    categories,
    step,
}) => {

    return <div class='w-full sm:w-1/2 border border-custom-color1 rounded-xl overflow-hidden relative'>
        {
            categories?.map((workSpace, index) => {

                return <div
                    key={workSpace.id}
                    class={`${index == step.value ? "block" : "hidden"}`}
                >
                    <Swiper
                        name={`work-space-${workSpace?.id}`}
                        paginationClass="active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md"
                        config={{
                            navigation: {
                                nextEl: ".work-space-next",
                                prevEl: ".work-space-prev",
                            },
                            autoplay: {
                                delay: 3000,
                            },
                            loop: true,
                        }}
                    >
                        {workSpace?.items?.map((slide, workSpaceIndex) => <SwiperSlide key={workSpaceIndex}>
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                containerClass="rounded-xl overflow-hidden aspect-square"
                                imageClass='w-full h-full '
                            />

                        </SwiperSlide>
                        )}
                    </Swiper>
                    <div class="work-space-next absolute z-10 top-1/2 start-1 -translate-y-1/2 w-6 sm:w-10 aspect-square border rounded-full p-1 bg-custom-color1 transition-all group hover:scale-110">
                        <ChevronRight class='w-full fill-white cursor-pointer' />
                    </div>
                    <div class="work-space-prev absolute z-10 top-1/2 end-1 -translate-y-1/2 w-6 sm:w-10 aspect-square border rounded-full p-1 bg-custom-color1 transition-all group hover:scale-110">
                        <ChevronLeft class='w-full fill-white cursor-pointer' />
                    </div>
                </div>
            }
            )
        }
    </div>
})

export default Slider
