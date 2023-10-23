import {
    Breadcrumb,
    Pagination,
    ProductCard,
} from 'Shared'
import {
    Categories,
    Heading,
} from 'ProductsParts'

const Layout = ({
    breadcrumb,
    categories,
    currentCategory,
    localePathPrefix,
    products,
    productsTexts,
    seo,
}) => {

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section>
            <div class="max-w-7xl mx-auto px-5 md:pb-10">
                <Heading title={seo?.pageTitle} />
                <Categories
                    categories={categories}
                    currentCategory={currentCategory}
                    productsTexts={productsTexts}
                    localePathPrefix={localePathPrefix}
                />

                <div class="px-5 lg:px-14 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-y-16 rounded-lg">
                    {products?.data?.length > 0 ?
                        products?.data.map(product => <>
                            <ProductCard
                                product={product}
                                readMoreText={productsTexts?.seeProduct}
                                localePathPrefix={localePathPrefix}
                            />
                        </>) :
                        <p>no data</p>
                    }
                </div>

            </div>
        </section>

        <Pagination
            metadata={products.metadata}
        />

    </>
}

export default Layout
