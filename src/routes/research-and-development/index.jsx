import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { Breadcrumb } from 'Shared'
import { Main } from 'ResearchAndDevelopment'

const getData = routeLoader$(async (props) => {

    const [
        page,
    ] = await useAsync(
        [
            getPage('researchAndDevelopment', props),
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
        researchAndDevelopment,
    } = data

    return <>

        <Breadcrumb breadcrumb={breadcrumb} />

        <section class='max-w-7xl mx-auto px-4 2xl:px-0'>
       <Main {...researchAndDevelopment}/>
        </section >

    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
