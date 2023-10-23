import { component$ } from '@builder.io/qwik'
import { useComment } from 'Social'
import {
    LongText,
    Text,
} from 'Forms'
import { Message } from 'Shared'

const AddComment = component$(({
    body,
    ctaText,
    entityGuid,
    entityType,
    errorMessage,
    name,
    submit: textButton,
    successMessage,
    title,
}) => {

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
    } = useComment(entityType, entityGuid)

    return <>
        <div class="flex flex-col gap-2 px-5 mt-10 md:mt-12 md:px-20 mb-10 md:mb-20">
            <div class="font-black text-custom-color2 text-lg">
                <span>
                    {title}
                </span>     
            </div>
            <Text
                class="w-full mt-2 border border-gray-300 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                modelBind={model}
                property="Name"
                placeholder={name?.placeholder}
            />
            <LongText
                class="w-full mt-2 border border-gray-300 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                modelBind={model}
                property="Body"
                placeholder={body?.placeholder}
            />
            <div class="flex justify-end mt-1">
                <span
                    class="font-bold px-6 py-2 rounded-md bg-custom-color1 text-white hover:bg-custom-color2 transition-all"
                    onClick$={handleSubmit}
                >
                    {ctaText || textButton}
                </span>
            </div>

            {
                isMessageShown.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? successMessage : errorMessage}
                />
            }

        </div>
    </>
})

export default AddComment
