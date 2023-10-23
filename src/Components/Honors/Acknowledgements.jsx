import { Image } from 'Base'
import { HeadingOne } from 'Shared'

const Acknowledgements = ({
    items,
    title,
}) => {

    return <div class='py-10'>
        <HeadingOne title={title} />
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5'>
            {items.map(item => <div
                class='my-10'
                key={item.id}
            >
                <Image
                    src={item.image}
                    containerClass='w-full h-full overflow-hidden border rounded-xl shadow shadow-custom-color2 shadow-sm'
                    imageClass='w-full h-full object-contain hover:scale-110 transition-all duration-500'
                    priority
                />
                <p class='mt-5 line-clamp-3 text-justify font-bold text-md flex justify-center text-custom-color2'>{item.title}</p>
            </div>)}

        </div>
    </div>
}

export default Acknowledgements
