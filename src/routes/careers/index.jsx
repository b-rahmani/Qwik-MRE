import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { getForm } from 'Forms'
import { Breadcrumb } from 'Shared'
import {
    ApplicationForm,
    CareersList,
} from 'Careers'

const getData = routeLoader$(async (props) => {

    const [
        page,
        applicationForm,
    ] = await useAsync(
        [
            getPage('careers', props),
            getForm('application', props),
        ]
    )
    return {
        ...page,
        applicationForm,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        breadcrumb,
        applicationForm,
        jobOpenings,
    } = data

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />
        <CareersList {...jobOpenings} />
        <ApplicationForm applicationForm={applicationForm} />
    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
