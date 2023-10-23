import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync
} from 'Base'
import { getLayout } from 'Contents'
import { getGlobalization } from 'Globalization'

const loadProduct = routeLoader$(async (props) => {
    const {
        params,
        query,
    } = props
    const { slug } = params || {}
    const locale = query?.get('locale')

    const [
        data,
        layout,
        globalization,
    ] = await useAsync([
        getFromCacheOrApi(`/product/get?slug=${slug}&locale=${locale}`),
        getLayout('product', props),
        getGlobalization(props),
    ])

    return {
        ...data,
        ...layout,
        ...globalization,
    }
})

export default loadProduct
