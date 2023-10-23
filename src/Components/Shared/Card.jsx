import { Image } from 'Base'
import { usePostUrl } from 'Blog'
import { ArrowLeft } from 'Svg'

const Card = ({
    items,
    localePathPrefix,
    readMore,
}) => {

    return <>
        {
            items?.map(item => <>
                <div
                    class="p-2 lg:p-6 border border-gray-200 rounded-xl p-3 group"
                    dir="rtl"
                    key={item?.id}
                >
                    <a
                        href={usePostUrl(item?.slug, localePathPrefix)}
                        title={item?.title}
                    >
                        <Image
                            src={item?.relatedItems?.imageUrl}
                            alt={item?.title}
                            containerClass='w-full aspect-[2/1] rounded-xl overflow-hidden'
                            imageClass='group-hover:scale-110 duration-500 transition-all object-center'
                        />
                    </a>
                    <h3 class="line-clamp-2 xl:line-clamp-1 mt-6 mb-4 md:text-md font-bold">
                        <a
                            class='block h-auto sm:h-14 xl:h-auto group-hover:text-custom-color2 transition-all'
                            href={usePostUrl(item?.slug, localePathPrefix)}
                            title={item?.title}
                        >
                            {item?.title}
                            {item?.title}
                        </a>
                    </h3>
                    <p class="h-[70px] line-clamp-3 text-sm leading-6">
                        {item?.summary}
                    </p>
                    <div class="flex justify-end mt-8 text-white text-center">
                        <a
                            class="inline-flex gap-2 items-center justify-center text-xs md:text-base bg-custom-color1 px-3 py-1 px-3 py-2 rounded-xl group-hover:bg-custom-color2 group-hover:gap-4 transition-all"
                            href={usePostUrl(item?.slug, localePathPrefix)}
                            title={item?.title}
                        >
                            <span>
                                {readMore}
                            </span>
                            <ArrowLeft
                                class="w-5 h-5 text-white"
                            />
                        </a >
                    </div>
                </div>
            </>)
        }
    </>
}

export default Card
