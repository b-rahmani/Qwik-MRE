import { component$ } from '@builder.io/qwik'
import { Form } from 'Contact'

const SocialNetwork = component$(({
    fields,
    form,
    items,
    title,
}) => {

    return <>
        <div class="w-full lg:flex-1 text-center rounded-xl border-[3px] border-custom-color1 p-4">
            <strong class="bg-custom-color2 py-2 px-4 w-fit h-fit mx-auto rounded-md text-white text-lg md:text-2xl inline-block text-center">
                {title}
            </strong>
            <div class="flex flex-wrap justify-center items-center gap-6 mt-10">
                {
                    items?.map(item => <>
                        <a
                            href={item?.link}
                            aria-label={item?.title}
                            target="_blank"
                            key={item?.id}
                        >
                            <div
                                dangerouslySetInnerHTML={item?.svg}
                                class="w-8 aspect-square fill-custom-color1 hover:fill-custom-color2 transition-all"
                            />
                        </a>
                    </>)
                }
            </div>
            <Form
                form={form}
                fields={fields}
            />
        </div>
    </>
})

export default SocialNetwork
