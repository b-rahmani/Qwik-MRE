import { component$ } from '@builder.io/qwik'
import {
    LongText,
    Text,
    useForm,
} from 'Forms'
import { Message } from 'Base'

const Form = component$(({
    class: style,
    content,
    form,
    title,
}) => {
    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
    } = useForm({
        fields: form?.relatedItems?.fields,
        form,
    })

    return <>

        <div class={`${style} relative flex-col gap-2 mb-10 md:mb-20`}>
            <div class="font-black text-custom-color2 text-lg px-5 md:px-20">
                <span>
                    {form?.title}
                </span>
            </div>
            <div class="px-0 md:px-32">
                <Text
                    class="w-full mt-2 border border-gray-300 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    property={title?.key}
                    placeholder={title?.placeholder}
                />
                <LongText
                    class="w-full mt-2 border border-gray-300 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    property={content?.key}
                    placeholder={content?.placeholder}
                />
                <div class="flex justify-end mt-1">
                    <span
                        class="font-bold px-6 py-2 rounded-md bg-custom-color1 text-white hover:bg-custom-color2 transition-all"
                        onClick$={handleSubmit}
                    >
                        {form?.ctaText}
                    </span>
                </div>
            </div>
            {
                isMessageShown.value &&
                <Message
                    isSuccess={isSuccess.value}
                    message={isSuccess.value ? form.successMessage : form.errorMessage}
                />
            }
        </div>
    </>
})

export default Form

