import {
    $,
    component$,
    useSignal,
} from '@builder.io/qwik'
import { RichText } from 'Shared'
import {
    Minus,
    Plus,
} from 'Svg'

const Specs = component$(({
    entitySnippets,
    specsTitle,
}) => {

    const activeAccordionId = useSignal()
    const accordionClickHandler = $((id) => {

        if (id === activeAccordionId.value) {
            activeAccordionId.value = ''
        } else {
            activeAccordionId.value = id
        }
    })

    return <>
        <section class="px-5">
            <div class="max-w-7xl mx-auto bg-custom-color31 rounded-lg px-4 py-6 md:px-10 md:py-12 mt-5 md:mt-10">

                <h1 class="text-custom-color2 font-black text-lg md:text-xl lg:text-2xl py-2">
                    {specsTitle}
                </h1>

                {
                    entitySnippets?.map(item => <div class="my-6" key={item?.id}>
                        <div class="max-w-fit flex gap-4 cursor-pointer" onClick$={() => accordionClickHandler(item?.id)}>

                            {
                                activeAccordionId.value === item.id
                                    ? <Minus class="w-8 p-1 aspect-square bg-white rounded-se-[10px] rounded-es-[10px] font-bold" />
                                    : <Plus class="w-8 p-1 aspect-square bg-custom-color1 rounded-se-[10px] rounded-es-[10px] font-bold" />
                            }

                            <p class="font-bold bg-custom-color31">
                                {item?.title}
                            </p>
                        </div>
                        <div class={`mx-4 border-s border-gray-400 border-opacity-60 border-dashed bg-custom-color31 overflow-hidden duration-1000 transition-all ${activeAccordionId.value === item?.id ? ' max-h-[50vh]' : ' max-h-0'}`}>
                            <div class='px-10 py-4'>
                                <RichText content={item?.relatedItems?.content} />
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>
        </section>
    </>
})

export default Specs
