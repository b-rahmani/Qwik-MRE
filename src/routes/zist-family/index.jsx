import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import {
    Image,
    useAsync,
} from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import {
    Partners,
    Breadcrumb,
    HeadingOne,
} from 'Shared'

const getData = routeLoader$(async (props) => {

    const [page] = await useAsync(
        [
            getPage('zistFamily', props),
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
        zistFamily,
        partners,
    } = data

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />

        <section class='mb-5 max-w-7xl mx-auto px-4 2xl:px-0'>
            <div class='w-full relative'>
                <Image
                    src={zistFamily?.bgImage}
                    containerClass='w-full h-[500px] absolute start-0 top-0 -z-10 opacity-20'
                    imageClass='w-full h-full object-contain object-center'
                />
                <div class="text-center my-14">
                    <HeadingOne title={zistFamily?.title} />
                </div>
                <p class='text-md leading-9 whitespace-pre-line	'>{zistFamily?.description}</p>
            </div>
            <Partners {...partners} />

        </section >

    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
