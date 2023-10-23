import {
    CategoryCard,
    HeadTitle,
} from 'Shared'

const BlogCategories = ({
    categories,
    localePathPrefix,
    title,
}) => {

    return <section>
        <div class="max-w-7xl mx-auto px-5 py-10">
            <HeadTitle title={title} />
            <div class="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-14 mt-10">
                {
                    categories?.map(category => <CategoryCard
                        key={category.id}
                        category={category}
                        localePathPrefix={localePathPrefix}
                    />)
                }
            </div>
        </div>
    </section>
}

export default BlogCategories
