import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import {
    Image,
    useAsync,
} from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import {
    Breadcrumb,
    HeadingOne,
} from 'Shared'

const getData = routeLoader$(async (props) => {

    const [page] = await useAsync(
        [
            getPage('pharmacies', props),
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
        pharmacies,
    } = data

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <section class='my-5 max-w-7xl mx-auto px-4 2xl:px-0 min-h-[50vh]'>

            <HeadingOne title={pharmacies?.pageTitle} />
            <a
                class='flex my-20 items-center justify-between py-4 px-10 rounded-lg text:md md:text-lg max-w-[200PX] mx-auto border text-custom-color1 shadow shadow-custom-color1 shadow-sm hover:translate-y-1 hover:text-custom-color2 group transition-all duration-500'
                href={pharmacies?.file}
                download
                target='_Blank'
            >
                <span
                    dangerouslySetInnerHTML={pharmacies?.icon}
                    class="flex [&>svg]:w-6 aspect-square fill-custom-color1 transition-all duration-500 group-hover:fill-custom-color2"
                />
                <span>
                    {pharmacies?.fileTitle}
                </span>
            </a>
        </section >
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
