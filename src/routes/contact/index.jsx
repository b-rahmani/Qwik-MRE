import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { getForm } from 'Forms'
import { Breadcrumb } from 'Shared'
import {
    CentralOfficeInfo,
    FactoryInfo,
    Form,
    ResearchOfficeInfo,
    SocialNetwork,
} from 'Contact'

const getData = routeLoader$(async (props) => {

    const [
        page,
        form,
    ] = await useAsync(
        [
            getPage('contact', props),
            getForm('contact', props),
        ]
    )
    return {
        ...page,
        ...form,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        breadcrumb,
        centralOfficeInfo,
        researchOfficeInfo,
        factoryInfo,
        contactTexts,
        fields,
        form,
        map,
        socialNetwork,
    } = data

    return <>

        <Breadcrumb breadcrumb={breadcrumb} />

        <section class='mb-5'>

            <div class="text-center mt-10 mb-14">
                <h1 class="font-black text-xl md:text-2xl lg:text-4xl text-custom-color2 mb-4">
                    {contactTexts?.title}
                </h1>
            </div>
            <div class="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-14 xl:gap-6 2xl:gap-14 mx-auto px-5 md:px-10 lg:px-12 2xl:px-40 pt-10">
                <SocialNetwork
                    {...socialNetwork}
                    form={form}
                    fields={fields}
                />
                <FactoryInfo {...factoryInfo} />
                <CentralOfficeInfo {...centralOfficeInfo} />
                <ResearchOfficeInfo {...researchOfficeInfo} />
            </div>
        </section >

    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
