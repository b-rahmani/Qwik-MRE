import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { getLocalePathPrefix } from 'Globalization'
import {
    Layout,
    loadProducts,
} from 'Products'
import { Layout as RunnableLayout } from 'ProductsParts'

const Index = component$(() => {

    const data = loadProducts().value
    data.localePathPrefix = getLocalePathPrefix()

    const {
        categories,
        latest,
        popular,
        products,
        seo,
    } = data || {}

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Index

export { loadProducts }

const head = ({
    params,
    resolveValue,
}) => {

    const data = resolveValue(loadProducts)

    return {
        title: data?.title || 'Products'
    }
}

export { head }
