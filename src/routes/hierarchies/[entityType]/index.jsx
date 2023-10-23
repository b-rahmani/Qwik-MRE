import { component$ } from '@builder.io/qwik'
import {
    loadHierarchies,
    HierarchiesLayout,
} from 'Taxonomy'
import { Layout as RunnableLayout } from 'HierarchiesParts'

const BaseHierarchies = component$(() => {

    const data = loadHierarchies().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <HierarchiesLayout {...data} />
})

export default BaseHierarchies
