import {
    Breadcrumb,
    Card,
    Pagination,
} from 'Shared'
import {
    Categories,
    ListHeading,
    SeoDescription,
} from 'BlogParts'

const Layout = ({
    blogSeo,
    blogTitles,
    breadcrumb,
    categories,
    category,
    localePathPrefix,
    posts,
    seo,
    tag,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />

        <SeoDescription
            blogTitles={blogTitles}
            seo={seo}
            categories={categories}
            categoryImage={category?.relatedItems?.imageUrl}
            tagImage={tag?.relatedItems?.imageUrl}
            defaultImage={blogSeo?.defaultImage}
        />

        <section>
            <div class="max-w-7xl mx-auto px-5">
                <Categories
                    active={category}
                    categories={categories}
                    blogTitles={blogTitles}
                    localePathPrefix={localePathPrefix}
                />
            </div>
        </section>

        <ListHeading blogTitles={blogTitles} />

        <div class="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
            <Card
                items={posts?.data}
                readMore={blogTitles?.readMore}
                localePathPrefix={localePathPrefix}
            />
        </div>

        <Pagination metadata={posts.metadata} />

    </>
}

export default Layout
