import { component$ } from '@builder.io/qwik'
import {
    Image,
    ScrollToTop,
} from 'Base'

const ScrollTop = component$(({
    alt,
    image,
}) => {

    return <>
        <ScrollToTop class="hidden lg:block absolute bottom-[16px] start-14 w-28 h-32 transition-all duration-500">
            <Image
                src={image}
                alt={alt}
                containerClass="relative w-auto cursor-pointer"
            />
        </ScrollToTop>
    </>
})

export default ScrollTop
