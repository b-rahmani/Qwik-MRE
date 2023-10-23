import {
    component$,
    useContextProvider,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'
import { NotFound } from 'Base'
import { useSeo } from 'Seo'
import { useEntityVisitCounter } from 'Social'
import { getLocalePathPrefix } from 'Globalization'
import {
    loadPost,
    PostContext,
    PostLayout,
} from 'Blog'
import { loadPost as runnableLoader } from 'Loaders'
import { Layout as RunnableLayout } from 'PostParts'

const Index = component$(() => {

    const visitCount = useSignal(0)

    const data = loadPost().value
    const extraData = runnableLoader().value

    if (data === 404) {
        return <NotFound />
    }

    data.localePathPrefix = getLocalePathPrefix()

    const { post } = data

    useVisibleTask$(async () => {
        visitCount.value = await useEntityVisitCounter(post?.relatedItems?.entityType || 'BlogPost', post?.guid)

    }, { strategy: 'document-ready' })

    useContextProvider(PostContext, visitCount)

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <PostLayout {...data} />
})

export default Index

export { loadPost }

export { runnableLoader }

const head = ({ resolveValue }) => {
    return useSeo(loadPost, resolveValue)
}

export { head }
