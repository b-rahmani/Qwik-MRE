import { Image } from 'Base'
import { HeadingTwo } from 'Shared'

const Partners = ({
    items,
    title,
}) => {

    return <div>
        <HeadingTwo title={title} />
        <div class='py-2 rounded-sm flex flex-col gap-y-5 my-5 md:my-10'>
            {items?.map((item, index) => <div
                id={item.id}
                style={{ animationDelay: (index + 1) * 150 + 'ms !important' }}
                class='max-w-6xl mx-auto border border-custom-color1 rounded-md p-4 md:p-8 animate-from-right'>
                <Image
                    src={item?.image}
                    containerClass='md:w-44 h-16'
                    imageClass='object-contain w-full h-full'
                />
                <p class='mt-4 w-full text-justify'>
                    {item?.description}
                </p>
            </div>)}
        </div>
    </div>
}

export default Partners
