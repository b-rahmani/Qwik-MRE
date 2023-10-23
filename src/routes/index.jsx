import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { getBlogCategories } from 'Blog'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { getQuestions } from 'Questions'
import {
    getGlobalization,
    getLocalePathPrefix,
} from 'Globalization'
import {
    getCategoriesProducts,
    getRecentProducts,
} from 'Products'
import {
    BlogCategories,
    Hero,
    Partners,
    Probiotic,
    Products,
    ProductsSlider,
    QaSlider,
    Videos,
} from 'Index'

const getData = routeLoader$(async (props) => {

    const [
        { latestProducts },
        categoriesProducts,
        page,
        blogCategories,
        globalization,
        questions,
    ] = await useAsync([
        getRecentProducts(10, props),
        getCategoriesProducts(5, props),
        getPage('home', props),
        getBlogCategories(props),
        getGlobalization(props),
        getQuestions(),
    ])

    return {
        ...questions,
        ...page,
        ...globalization,
        categoriesProducts,
        latestProducts,
        blogCategories,
    }
})

const Index = component$(() => {

    const data = getData().value
    data.localePathPrefix = getLocalePathPrefix()

    const {
        articles,
        blogCategories,
        blogTitles,
        categoriesProducts,
        currentLocale,
        hero,
        isRtl,
        localePathPrefix,
        partners,
        probiotic,
        productsSliderTexts,
        productsTexts,
        qA,
        questions,
        videos,
        latestProducts,
    } = data

    return <>

        <Hero {...hero} />
        <Probiotic
            probiotic={probiotic?.items}
            bg={probiotic?.image}
            imageAlt={probiotic?.imageAlt}
        />
        <Products
            categoriesProducts={categoriesProducts}
            productsTexts={productsTexts}
            localePathPrefix={localePathPrefix}
        />
        <Videos {...videos} />
        <QaSlider
            {...qA}
            questions={questions}
        />
        <BlogCategories
            categories={blogCategories}
            title={blogTitles?.categoriesTitle}
            localePathPrefix={localePathPrefix}
        />
        <Partners
            {...currentLocale}
            {...partners}
        />
        <ProductsSlider
            products={latestProducts}
            {...productsSliderTexts}
        />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
