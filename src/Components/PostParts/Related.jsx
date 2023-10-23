import { Image } from 'Base'

const Related = ({ relatedPosts }) => {

    return <>
        {
            relatedPosts?.map(item => <>
                <div
                    class="w-full group"
                    key={item?.id}
                >
                    <a
                        href={item?.slug}
                        title={item?.title}
                    >
                        <Image
                            src={item?.relatedItems?.imageUrl}
                            alt={item?.title}
                            containerClass='w-full aspect-[2/1] rounded-lg overflow-hidden'
                            imageClass='w-full h-full object-fill object-center'
                        />
                    </a>
                    <a
                        href={item?.slug}
                        title={item?.title}
                        class="line-clamp-2 my-2 group-hover:text-custom-color2 text-sm transition-all"
                    >
                        {item?.title}
                    </a>
                    <div
                        class="line-clamp-2 text-sm text-custom-color3 mt-1"
                    >
                        {item?.summary}
                    </div>
                </div>
            </>)
        }
    </>
}

export default Related
