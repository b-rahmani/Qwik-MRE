import { Image } from 'Base'

const Branding = ({
    brand,
    link,
    logo,
    slogan,
}) => {

    return <>
        <a
            href={link}
            aria-label="Click Here To Go Home"
            class="w-[120px] md:w-[175px] absolute start-0 end-0 mx-auto lg:relative mx-auto lg:mx-0 my-4 md:my-7 lg:my-9"
        >
            <Image
                src={logo}
                alt={brand}
                aria-label={slogan}
                containerClass='w-full aspect-[175/40]'
                priority
            />
        </a>
    </>
}

export default Branding
