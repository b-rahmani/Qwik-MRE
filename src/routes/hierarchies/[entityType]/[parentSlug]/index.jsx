import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import {
    getFromCacheOrApi,
    useAsync,
} from 'Base'
import { getLayout } from 'Contents'
import {
    ChildrenLayout,
} from 'Taxonomy'
import { Layout as RunnableLayout } from 'HierarchyChildrenParts'

const loadChildrenData = routeLoader$(async (props) => {

    const { params } = props

    const {
        entityType,
        parentSlug,
    } = params

    const [
        data,
        layout,
    ] = await useAsync([
        getFromCacheOrApi(`/hierarchyCommon/children?entityType=${entityType}&parentSlug=${parentSlug}`),
        getLayout('hierarchyChildren', props)
    ])

    return {
        ...data,
        ...layout,
        entityType,

    }
})

const BaseChildren = component$(() => {

    const data = loadChildrenData().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <ChildrenLayout {...data} />
})

export default BaseChildren

export { loadChildrenData }

const head = ({
    params,
    resolveValue,
}) => {

    const data = resolveValue(loadChildrenData)

    return {
        title: data?.title || 'hierarchies'
    }
}

export { head }

