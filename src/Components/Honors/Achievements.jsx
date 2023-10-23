import { Image } from 'Base'
import { HeadingOne } from 'Shared'

const Achievements = ({
    items,
    title,
}) => {

    return <div class='py-10'>
        <HeadingOne title={title} />
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5'>
            {items.map(item => <div
                class='my-10 flex flex-col items-center'
                key={item.id}
            >
                <Image
                    src={item.image}
                    containerClass='w-28 h-28 overflow-hidden border'
                    imageClass='w-full h-full object-contain object-center'
                    priority
                />
                <p class='mt-5 line-clamp-2 text-justify font-bold text-md flex justify-center text-custom-color2'>{item.title}</p>
            </div>)}
        </div>
    </div>

}

export default Achievements
