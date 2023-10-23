import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import {
    Image,
    useAsync,
} from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { Catalogs } from 'CompanyProfile'
import { Breadcrumb } from 'Shared'

const getData = routeLoader$(async (props) => {

    const [page] = await useAsync(
        [
            getPage('companyprofile', props),
        ]
    )
    return {
        ...page,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        breadcrumb,
        catalogs,
    } = data

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <Catalogs catalogs={catalogs} />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
