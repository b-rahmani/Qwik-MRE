import {component$} from '@builder.io/qwik'
import {Image} from 'Base'
import { 
    Breadcrumb,
    RichText,
} from 'Shared'
import { Heading } from 'PageParts'

const Layout = component$(({
    breadcrumb,
    content,
    page,
    pageHeadingImage,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section>
            <div class="max-w-7xl mx-auto px-5">
                <Heading
                    alt={pageHeadingImage?.alt}
                    image={pageHeadingImage?.image}
                    title={page?.title}
                />
                <Image
                    src={page?.relatedItems?.imageUrl}
                    alt={page?.title}
                    containerClass='w-full aspect-[3/1] rounded-lg overflow-hidden'
                />
                <div class="w-full bg-custom-color31 rounded-lg px-7 md:px-10 py-12 mb-32 my-8 md:mt-10 md:mb-24">
                    <RichText content={content} />
                </div>
            </div>
        </section>
    </>
})

export default Layout
