import { Image } from 'Base'

const PhotoCard = ({ items }) => {

    return <>
        {
            items?.map(item => <>
                <div
                    class="p-6 rounded-xl p-3 group"
                    dir="rtl"
                    key={item?.id}
                >
                    <Image
                        src={item?.relatedItems?.imageUrl}
                        alt={item?.title}
                        containerClass='w-full aspect-[3/2] rounded-xl overflow-hidden'
                        imageClass='group-hover:scale-110 duration-500 transition-all'
                    />

                </div>
            </>)
        }
    </>
}

export default PhotoCard
