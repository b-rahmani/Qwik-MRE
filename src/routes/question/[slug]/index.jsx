import { component$ } from '@builder.io/qwik'
import { useSeo } from 'Seo'
import {
    loadQuestion,
    QuestionLayout,
} from 'Questions'
import { Layout as RunnableLayout } from 'QuestionParts'

const question = component$(() => {

    const data = loadQuestion().value

    return RunnableLayout
        ?
        <RunnableLayout {...data} />
        :
        <QuestionLayout {...data} />
})

export default question

export { loadQuestion }

const head = ({ resolveValue }) => {
    return useSeo(loadQuestion, resolveValue)
}

export { head }
