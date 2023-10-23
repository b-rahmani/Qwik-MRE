import { component$ } from '@builder.io/qwik'
import { useSeo } from 'Seo'
import { getLocalePathPrefix } from 'Globalization'
import {
    loadProduct,
    ProductLayout,
} from 'Products'
import { loadProduct as runnableLoader } from 'Loaders'
import { Layout as RunnableLayout } from 'ProductParts'

const Index = component$(() => {

    const data = loadProduct().value
    const extraData = runnableLoader().value
    data.localePathPrefix = getLocalePathPrefix()

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <ProductLayout {...data} />
})

export default Index

export { loadProduct }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadProduct, resolveValue)
}

export { head }
