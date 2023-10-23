import { Image } from 'Base'
import { HeadTitle } from 'Shared'

const Partners = ({
    isRtl,
    items,
    title,
}) => {
    return <section class='px-5 max-w-7xl mx-auto'>
        <HeadTitle title={title} />
        <div class='grid grid-cols-2 gap-4 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 items-center justify-center py-5 mb-20'>
            {
                items?.map((partner, index) =>
                    <a
                        target='_blank'
                        href={partner?.link}
                        class='flex items-center justify-center flex-col gap-y-4 group'
                    >
                        <Image
                            alt={partner?.name}
                            src={partner?.image}
                            containerClass='md:w-44 h-16'
                            imageClass='object-contain w-full h-full transition-all duration-300 group-hover:scale-110'
                        />
                        <strong class={`
                        transition-all duration-300 mx-auto inline text-center relative after:absolute after:top-0 after:start-[50%] after:-z-20 $ after:w-[120%] after:translate-x-[-50%] rtl:after:translate-x-[50%] after:h-full after:max-w-0 group-hover:after:max-w-[120%] after:bg-custom-color1 after:transition-all after:ease-in-out after:duration-300 group-hover:text-white after:rounded-md`}>
                            {partner?.name}
                        </strong>
                    </a>
                )
            }
        </div>
    </section>
}

export default Partners
