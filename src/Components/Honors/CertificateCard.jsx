import { Image } from 'Base'

const CertificateCard = ({
    image,
    title,
}) => {
    return <div class='my-10'>
        <Image
            src={image}
            containerClass='w-full h-full overflow-hidden border rounded-xl shadow shadow-custom-color2 shadow-sm'
            imageClass='w-full h-full object-contain hover:scale-110 transition-all duration-500'
            priority
        />
        <p class='mt-5 line-clamp-3 text-justify font-bold text-md flex justify-center text-custom-color2'>{title}</p>
    </div>
}

export default CertificateCard
