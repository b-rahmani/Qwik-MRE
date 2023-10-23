import {
    Breadcrumb,
    GalleryCard,
    Pagination,
} from 'Shared'
import { Heading } from 'GalleriesParts'

const Layout = ({
    breadcrumb,
    galleries,
    galleryHeading,
    galleryTexts,
    seo,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section>
            <div class="max-w-7xl mx-auto px-5">
                <Heading
                    alt={galleryHeading?.alt}
                    image={galleryHeading?.image}
                    title={seo?.pageTitle}
                />
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
                    <GalleryCard
                        items={galleries?.data}
                        readMore={galleryTexts?.readMore}
                    />
                </div>
                <Pagination metadata={galleries.metadata}/>
            </div>
        </section>
    </>
}

export default Layout
