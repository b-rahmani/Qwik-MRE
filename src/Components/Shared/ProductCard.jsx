import { useProductUrl } from 'Products'
import { Image } from 'Base'
import { ArrowLeft } from 'Svg'

const ProductCard = ({
    localePathPrefix,
    product,
    readMoreText,
}) => {

    return <>

        <div
            class="rounded-se-[100px] rounded-es-[100px] rounded-ss-xl rounded-ee-xl shadow-lg border border-gray-100 px-4 py-6 grid grid-cols-1 gap-4 bg-white mx-1.5"
            key={product?.id}
        >
            <a
                href={useProductUrl(product?.slug, localePathPrefix)}
            >
                <Image
                    src={product?.relatedItems?.imageUrl || product?.imageUrl}
                    containerClass="w-[60%] h-[200px] mx-auto"
                    imageClass="h-full object-contain hover:scale-110 duration-300"
                    alt={product?.title}
                />
            </a>
            <a
                href={useProductUrl(product?.slug, localePathPrefix)}
                class="flex gap-1 mx-auto"
            >
                <strong class="hover:text-custom-color2">
                    {product?.title}
                </strong>
            </a>
            <p class="line-clamp-2 h-12 text-base text-custom-color3 text-sm">
                {product?.summary}
            </p>
            <div class="w-full text-center my-4">
                <a
                    href={useProductUrl(product?.slug, localePathPrefix)}
                    class="inline-flex gap-2 items-center justify-center text-xs md:text-base bg-custom-color1 text-white mx-auto px-5 py-2 rounded-md hover:bg-custom-color2 hover:gap-4 transition-all"
                >
                    <span>
                        {readMoreText}
                    </span>
                    <ArrowLeft
                        class="w-5 aspect-square text-white"
                    />
                </a>
            </div>
        </div>

    </>
}

export default ProductCard
