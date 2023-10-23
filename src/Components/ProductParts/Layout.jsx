
import {
    Breadcrumb,
    RichText,
} from 'Shared'
import {
    Heading,
    Related,
    Slider,
    Specs,
} from 'ProductParts'

const Layout = ({
    breadcrumb,
    content,
    latestProducts,
    localePathPrefix,
    product,
    productsTexts,
}) => {

    return <>

        <Breadcrumb breadcrumb={breadcrumb} />

        <Heading title={product?.title} />

        <section>
            <div class="max-w-7xl mx-auto px-5 flex flex-col-reverse md:flex-row gap-10 mt-8">
                <div class="w-full md:w-1/2 rounded-2xl rounded-se-[100px] rounded-es-[100px] shadow-lg px-7 py-16">
                    <h2 class="w-fit mb-6 px-6 py-3 rounded-se-[14px] rounded-es-[14px] bg-custom-color1 text-white font-bold">{productsTexts?.productDescription}</h2>
                    <p class="text-custom-color3">
                        {product?.summary}
                    </p>
                    {/* <a
                        href={product?.subtitle}
                        target="_blank"
                        download='rr'
                    >download</a> */}
                </div>
                <Slider {...product} />
            </div>
        </section>

        {product?.relatedItems?.entitySnippets.length > 0 &&
            <Specs
                {...productsTexts}
                entitySnippets={product?.relatedItems?.entitySnippets}
            />
        }

        {content != "[]" &&
            <section class="px-5">
                <div class="max-w-7xl mx-auto bg-custom-color31 rounded-lg px-4 py-6 md:px-10 md:py-12 mt-5 md:mt-10">
                    <RichText content={content} />
                </div>
            </section>
        }

        <Related
            latestProducts={latestProducts}
            productsTexts={productsTexts}
            localePathPrefix={localePathPrefix}
        />

    </>
}

export default Layout
