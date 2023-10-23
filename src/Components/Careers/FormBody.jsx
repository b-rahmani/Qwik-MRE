import { component$ } from '@builder.io/qwik'
import { Message } from 'Base'
import {
    File,
    LongText,
    Text,
    useForm,
} from 'Forms'
import { Loading } from 'Svg'

const FormBody = component$(({
    fields,
    form,
}) => {
    const {
        age,
        desiredJobOpening,
        lastName,
        message,
        name,
        resume,
    } = fields

    const {
        handleSubmit,
        isMessageShown,
        isSuccess,
        model,
        progress,
    } = useForm({
        fields: form?.relatedItems?.fields,
        form,
    })

    return <>
        <div>
            <div class='grid grid-cols-1 gap-2 md:grid-cols-2'>
                <div>
                    <Text
                        class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={name?.placeholder}
                        property={name?.key}
                    />
                </div>
                <div>
                    <Text
                        class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={lastName?.placeholder}
                        property={lastName?.key}
                    />
                </div>
                <div>
                    <Text
                        class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={age?.placeholder}
                        property={age?.key}
                    />
                </div>
                <div>
                    <Text
                        class="w-full bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                        modelBind={model}
                        placeholder={desiredJobOpening?.placeholder}
                        property={desiredJobOpening?.key}
                    />
                </div>
            </div>
            <div>
                <File
                    rows="6"
                    class="resize-none w-full mt-2 bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                    modelBind={model}
                    placeholder={resume?.placeholder}
                    property={resume?.key}
                />
            </div>
            <div>
                <LongText
                    rows="6"
                    class="resize-none w-full mt-2 bg-gray-100 rounded-xl px-5 py-3 focus:outline-none placeholder-gray-500"
                    placeholder={message?.placeholder}
                    modelBind={model}
                    property={message?.key}
                />
            </div>
            <div class="text-end">
                <button
                    id="buttonSubmit"
                    aria-label={form.ctaText}
                    class={`${progress.value ? "bg-gray-300" : "bg-custom-color1"} text-white rounded-xl px-10 py-3 hover:bg-custom-color2 transition-all`}
                    onClick$={handleSubmit}
                >
                    {
                        progress.value ?
                            <Loading class="animate-spin h-6 w-7" /> :
                            form.ctaText
                    }
                </button>
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

export default FormBody
