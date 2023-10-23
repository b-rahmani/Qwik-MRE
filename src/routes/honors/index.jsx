import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { Breadcrumb } from 'Shared'
import {
    Achievements,
    Acknowledgements,
    Certificates,
    Statues,
} from 'Honors'

const getData = routeLoader$(async (props) => {

    const [
        page,
    ] = await useAsync(
        [
            getPage('honors', props),
        ]
    )
    return {
        ...page,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        achievements,
        acknowledgements,
        breadcrumb,
        certificates,
        statues,
    } = data

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />

        <section class='max-w-7xl mx-auto px-4 2xl:px-0 pb-10'>
            <Certificates {...certificates} />
            <Statues {...statues} />
            <Acknowledgements {...acknowledgements} />
            <Achievements {...achievements} />
        </section >
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
