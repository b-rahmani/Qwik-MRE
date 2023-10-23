import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import {
    Image,
    useAsync,
} from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import {
    List,
    Technology,
} from 'Capabilities'
import { Breadcrumb } from 'Shared'

const getData = routeLoader$(async (props) => {

    const [page] = await useAsync(
        [
            getPage('capabilities', props),
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
        capabilities,
        isRtl,
        technologySlider,
    } = data
    return <>
        <Breadcrumb breadcrumb={breadcrumb} />

        <section class='mb-5 max-w-7xl mx-auto px-4 2xl:px-0'>
            <Technology {...technologySlider} />
            <List
                {...capabilities}
                isRt={isRtl}
            />

        </section >

    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
