import {
    Image,
    Swiper,
    SwiperConfig,
    SwiperSlide,
} from 'Base'
import { HeadingOne } from 'Shared'
import {
    ChevronLeft,
    ChevronRight,
} from 'Svg'

const Technology = ({
    items,
    title,
}) => {

    return <>
        <div class='relative'>
            <HeadingOne title={title} />
            <Swiper
                name='capability'
                containerClass="py-10 relative"
                paginationClass="pt-10 active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md"
                config={{
                    ...SwiperConfig,
                    effect: 'fade',
                    fadeEffect: { crossFade: true },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: true,
                    },
                    speed: 1000,
                    navigation: {
                        nextEl: ".capability-next",
                        prevEl: ".capability-prev",
                    },
                }}
            >
                {items?.map((item, index) => <>
                    <SwiperSlide key={item.id}>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            containerClass='w-full aspect-[2/1] rounded-xl overflow-hidden border'
                            imageClass='w-full h-full object-cover'
                            priority={index < 2}
                        />
                    </SwiperSlide>
                </>)
                }

            </Swiper>
            <div class="capability-next absolute z-10 top-1/2 start-1 w-6 sm:w-10 aspect-square border rounded-full p-1 bg-custom-color1  transition-all group hover:scale-110">
                <ChevronRight class='w-full fill-white' />
            </div>
            <div class="capability-prev absolute z-10 top-1/2 end-1 w-6 sm:w-10 aspect-square border rounded-full p-1 bg-custom-color1  transition-all group hover:scale-110">
                <ChevronLeft class='w-full fill-white ' />
            </div>
        </div>
    </>
}

export default Technology
