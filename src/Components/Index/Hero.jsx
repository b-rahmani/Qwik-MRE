import {
    component$,
    useVisibleTask$,
} from '@builder.io/qwik'
import { Image } from 'Base'
import { Play } from 'Svg'

const Hero = component$(({
    ctaLink,
    ctaText,
    description,
    desktopBackground,
    isVideo,
    mobileBackground,
    mobileVideo,
    subtitle,
    tabletBackground,
    title,
    video,
}) => {

    useVisibleTask$(() => {
        const heroTitle = document.getElementById('hero-title')
        const heroDescription = document.getElementById('hero-description')

        heroTitle.style.setProperty('transform', 'translateX(-20px)', 'important')
        heroDescription.style.setProperty('transform', 'translateX(-20px)', 'important')

        setTimeout(() => {
            heroTitle.style.setProperty('transform', 'translateX(0px)', 'important')
            heroDescription.style.setProperty('transform', 'translateX(0px)', 'important')
        }, 2000)

    }, {
        strategy: 'intersection-observer'
    })

    return <section>
        <div class="w-full relative -z-10">
            {isVideo ? <video
                // controls
                autoplay
                loop
                muted
                playsinline
                id="hero"
                class="relative z-10 w-full aspect-[1/2] sm:aspect-square max-h-[700px] object-cover object-center"
                src={mobileVideo}
                type="video/mp4"></video> : <>
                <Image
                    src={mobileBackground}
                    alt={title}
                    containerClass="absolute w-full h-full sm:hidden"
                    priority
                />
                <Image
                    src={tabletBackground}
                    alt={title}
                    containerClass="absolute w-full h-full hidden sm:block lg:hidden"
                    priority
                />
                <Image
                    src={desktopBackground}
                    alt={title}
                    containerClass="absolute w-full h-full hidden lg:block"
                    imageClass='object-contain'
                    priority
                />
            </>}

            <div class="absolute z-20 max-w-7xl mx-auto px-5 py-20 lg:py-40 w-full h-full inset-0">
                <div class="w-full md:w-1/2 flex flex-col gap-1 md:gap-2 lg:gap-6 text-white">
                    <div
                        id='hero-title'
                        class='rounded-xl transition-all duration-[2000ms] ease-out translate-x-[2000px] bg-black/20 backdrop-blur-lg select-none w-fit'>
                        <h1
                            class='py-1.5 px-4 rounded-xl font-black text-2xl sm:text-3xl md:text-4xl lg:leading-10'
                        >
                            {title}
                        </h1>
                        <h2
                            // id='hero-subtitle'
                            class="py-1.5 px-4 rounded-xl text-lg"
                        >
                            {subtitle}
                        </h2>
                    </div>
                    <p
                        id='hero-description'
                        class="py-1.5 px-4 text-justify rounded-xl lg:leading-7 line-clamp-5 transition-all duration-[2200ms] ease-out translate-x-[3000px] bg-black/20 backdrop-blur-lg select-none"
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </section>
})

export default Hero
