import { Image } from 'Base'

const Structure = ({
    title,
    treeImage,
}) => {

    return <Image
        src={treeImage}
        alt={title}
        containerClass='mt-5 w-full aspect-[2/1] rounded-xl overflow-hidden border border-custom-color1'
        imageClass='w-full h-full object-cover'
        priority
    />
}

export default Structure
