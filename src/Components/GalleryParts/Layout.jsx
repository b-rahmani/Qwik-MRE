import { Heading } from 'GalleryParts'
import {
    Breadcrumb,
    LightBoxGallery,
} from 'Shared'

const Layout = ({
    breadcrumb,
    gallery,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <Heading
            description={gallery?.description}
            title={gallery?.title}
        />
        <div class="max-w-7xl mx-auto px-5 mt-10 mb-10 md:mb-20">
            <LightBoxGallery
                items={gallery?.relatedItems?.images}
                title={gallery?.title}
            />
        </div>
    </>
}

export default Layout
