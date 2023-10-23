import { Image } from 'Base'
import {
    ContactInfo,
    FooterLinks,
    FooterSocialNetwork,
    ScrollTop,
} from 'Layout'

const Footer = ({
    centralOfficeInfo,
    copyright,
    footerFirstLinks,
    footerImages,
    footerSecondLinks,
    footerSites,
    footerThirdLinks,
    scrollTopImage,
    socialNetwork,
}) => {

    return <>
        <footer class='relative select-none'>
            <section class='bg-custom-color2 text-white relative z-10 overflow-hidden pb-20 pt-12'>
                <a href={footerImages?.logoLink}>
                    <Image
                        containerClass='relative z-50 w-12 aspect-square mx-auto rounded-2xl flex items-center justify-center'
                        imageClass='object-cover mx-auto w-full aspect-square rounded-xl overflow-hidden '
                        src={footerImages?.logo}
                        alt={footerImages?.logoAlt}
                    />
                </a>
                <Image
                    containerClass='absolute w-full h-full start-0 top-0 z-10'
                    imageClass='object-cover'
                    src={footerImages?.backgroundImage}
                    alt={footerImages?.backgroundAlt}
                />
                <div class='max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-20 py-5 lg:py-8 relative z-20'>
                    <FooterLinks {...footerFirstLinks} />
                    <FooterLinks {...footerSecondLinks} />
                    <FooterLinks {...footerThirdLinks} />
                    <ContactInfo
                        {...centralOfficeInfo}
                        footerSites={footerSites}
                    />
                </div>
                <FooterSocialNetwork socialNetwork={socialNetwork} />
            </section>
            <section>
                <div class='flex justify-center max-w-7xl mx-auto px-5 my-3 text-xs text-custom-color2'>
                    {copyright?.text}
                </div>
            </section>
            <ScrollTop
                {...scrollTopImage}
            />
        </footer>
    </>
}

export default Footer
