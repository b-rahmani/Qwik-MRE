import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'
import { Image } from 'Base'
import { Play } from 'Svg'
import { HeadTitle } from 'Shared'

const Videos = component$(({ items }) => {

    const step = useSignal(0)
    const videoElement = useSignal()
    const isPlaying = useSignal(false)

    const startPreview = $(() => {
        if (isPlaying.value == false) {
            videoElement.value.muted = true
            videoElement.value.currentTime = 1
            videoElement.value.playbackRate = 0.5
            videoElement.value.play()
        }
    })
    const stopPreview = $(() => {
        if (isPlaying.value == false) {
            videoElement.value.currentTime = 0
            videoElement.value.playbackRate = 1
            videoElement.value.pause()
        }
    })

    useVisibleTask$(() => {
        let previewTimeout = null

        document.getElementById('video').addEventListener("mouseenter", () => {
            startPreview()
            previewTimeout = setTimeout(stopPreview, 10_000)
        })

        document.getElementById('video').addEventListener("mouseleave", () => {
            if (!isPlaying.value) {
                stopPreview()
            }
        })
    })
    return <>
        <section id="videos">
            <div class="flex flex-col gap-2 md:gap-5 max-w-7xl mx-auto px-4 py-5 md:py-20">
                <HeadTitle title={items[step.value].title} />
                <div class="lg:basis-9/12 relative cursor-pointer">
                    <video
                        controls
                        id="video"
                        class={`relative z-10 w-full aspect-[2/1] object-cover rounded-md ${!isPlaying.value && "cursor-wait"}`}
                        src={items?.[step.value]?.video}
                        ref={videoElement}
                        type="video/mp4"
                        onClick$={() => {
                            if (isPlaying.value = false) {
                                isPlaying.value = true
                                videoElement.value.play()
                            } else if (isPlaying.value = true) {
                                videoElement.value.pause()
                                isPlaying.value = false
                            }
                        }}
                    >
                        <track
                            src={items?.[step.value]?.video}
                            kind="captions"
                            srclang="en"
                            label={items?.[step.value]?.title}
                        />
                    </video>
                    <div
                        id='playButton'
                        class={`absolute z-20 inset-0 mx-auto my-auto h-fit block w-12 sm:w-14 md:w-20 aspect-square flex items-center justify-center ${isPlaying.value && "hidden"}`}
                        onClick$={() => {
                            isPlaying.value = true
                            videoElement.value.play()
                        }}
                    >
                        <span class="w-full aspect-square text-white flex items-center justify-center">
                            <Play
                                class="fill-white [&+path]:fill-custom-color1 hover:fill-custom-color2 [priority+path]:hover:fill-custom-color1 hover:[&+path]:fill-white transition-all"
                            />
                        </span>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-0.5 sm:gap-2 md:gap-5">
                    {
                        items?.map((item, index) => <>
                            <div
                                class={`relative cursor-pointer box-border rounded-md md:rounded-2xl`}
                                key={item?.id}
                            >
                                <div class={`transition-all duration-100 w-full box-border p-0.5 border-2 rounded-md md:rounded-2xl ${step.value == index ? 'border-custom-color3' : 'border-transparent'} border-dashed`}
                                    key={index?.id}
                                    poster={item?.poster}
                                    onClick$={() => {
                                        isPlaying.value = false
                                        step.value = index
                                    }}
                                >
                                    <Image
                                        src={item?.poster}
                                        alt={item?.title}
                                        containerClass={`w-full aspect-[2/1] overflow-hidden rounded-md md:rounded-2xl`}
                                    />
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </section>
    </>
})

export default Videos
