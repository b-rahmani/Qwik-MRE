import { Image } from 'Base'

const Latest = ({ latestPosts }) => {
    
    return <>
        {
            latestPosts?.map(item => <>
                <div
                    class="w-full"
                    key={item?.id}
                >
                    <a
                        href={item?.slug}
                        title={item?.title}
                    >
                        <Image
                            src={item?.relatedItems?.imageUrl}
                            alt={item?.title}
                            containerClass='w-full aspect-[3/2]'
                        />
                    </a>
                    <a
                        href={item?.slug}
                        title={item?.title}
                        class="block line-clamp-3 my-6 group-hover:text-custom-color11 transition-all"
                    >
                        {item?.title}
                    </a>
                </div>
            </>)
        }
    </>
}

export default Latest
