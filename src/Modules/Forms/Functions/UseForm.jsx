import {
    $,
    // component$,
    useSignal
} from '@builder.io/qwik'
import {
    post,
    useMessage,
} from 'Base'

const useForm = ({
    fields,
    form,
}) => {

    const model = useSignal({})
    const progress = useSignal(false)

    const {
        isMessageShown,
        isSuccess,
    } = useMessage()

    fields?.map((field, index) => {
        model.value[field.key] = ''
    })

    const resetFields = $(() => {
        model.value = {}
    })

    const handleSubmit = $(async () => {
        progress.value = true
        var url = form.ctaLink
        if (!url) {
            url = `/form/save?key=${form.key}`
        }
        await post(url, model.value).then(data => {
            isMessageShown.value = true
            isSuccess.value = true
            resetFields()
            progress.value = false
        }, e => {
            isMessageShown.value = true
            isSuccess.value = false
            progress.value = false
        })
    })

    return {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    }
}

export default useForm
