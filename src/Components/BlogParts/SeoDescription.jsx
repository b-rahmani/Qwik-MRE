import { Image } from 'Base'
import { RichText } from 'Shared'

const SeoDescription = ({
    blogTitles,
    categoryImage,
    defaultImage,
    seo,
    tagImage,
}) => {

    return <section>
        <div class="max-w-7xl mx-auto px-5">
            <div class="mb-7">
                <div class="w-full flex flex-wrap items-center gap-5 py-7 mb-7 border-b-2 border-gray-200">
                    <div class="w-20 aspect-square flex items-center justify-center bg-custom-color31 bg-opacity-30 border border-y-gray-200 border-e-gray-200 border-s-[6px] border-custom-color2">
                        <Image
                            src={categoryImage || tagImage || defaultImage}
                            containerClass="w-12 aspect-square"
                        />
                    </div>
                    <h1 class="w-[calc(100%-120px)] flex flex-wrap gap-1 font-bold text-lg md:text-2xl">
                        {/* <span class="font-black text-custom-color2">{blogTitles?.mainTitle}</span> */}
                        <span>{seo?.pageTitle}</span>
                    </h1>
                </div>

                <RichText content={seo?.relatedItems?.content} />

            </div>

        </div>
    </section>
}

export default SeoDescription
