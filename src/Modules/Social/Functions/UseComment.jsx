import {
    $,
    useSignal,
} from '@builder.io/qwik'
import {
    post,
    useMessage
} from 'Base'

const useComment = (entityType, entityGuid) => {

    const model = useSignal({
        body: "",
        email: "",
        entityGuid: entityGuid,
        entityType: entityType,
        name: "",
        website: "",
    })

    const {
        isMessageShown,
        isSuccess,
    } = useMessage()

    const resetFields = $(() => {
        model.value = {
            body: "",
            email: "",
            entityGuid: entityGuid,
            entityType: entityType,
            name: "",
            website: "",
        }
    })

    const handleSubmit = $(async () => {

        await post('/comment/save', model.value).then(data => {
            isSuccess.value = isMessageShown.value = true
            resetFields()
        }, e => {
            isSuccess.value = false
            isMessageShown.value = true
        })
    })

    return {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        resetFields,
    }
}

export default useComment
