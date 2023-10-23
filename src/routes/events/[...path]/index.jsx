import { component$ } from '@builder.io/qwik'
import { NotFound } from 'Base'
import { useSeo } from 'Seo'
import { getLocalePathPrefix } from 'Globalization'
import {
    loadEvents,
    Layout,
} from 'Events'
import { Layout as RunnableLayout } from 'EventsParts'

const Events = component$(() => {

    const data = loadEvents().value

    if (data === 404) {
        return <NotFound />
    }

    data.localePathPrefix = getLocalePathPrefix()

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <Layout {...data} />
})

export default Events

export { loadEvents }

const head = ({ resolveValue }) => {
    return useSeo(loadEvents, resolveValue)
}

export { head }
