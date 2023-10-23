import {
    component$,
    useSignal,
    useTask$
} from '@builder.io/qwik'
import {
    Description,
    Slider
} from 'WorkAndProductionSpace'
import { HeadingOne } from 'Shared'


const Main = component$(({
    categories,
    title,
}) => {

    const step = useSignal(0)

    return <div class='mt-5 mb-10'>

        <HeadingOne title={title} />

        <div class="w-full flex gap-2 border rounded-xl border-custom-color1 p-3 overflow-x-auto transition-all duration-300 mt-10">
            {
                categories?.map((item, index) => <div class='group'
                    onClick$={() => {
                        step.value = index
                    }}
                >
                    <div
                        class={[
                            'min-w-fit whitespace-nowrap rounded-lg py-2 px-5 text-sm md:text-base hover:bg-custom-color2 hover:text-white duration-300 transition-all',
                            `cursor-pointer font-bold ${step.value == index && "bg-custom-color1 text-white"}`]}
                        key={item.id}
                    >
                        {item?.title}
                    </div>
                </div>
                )
            }
        </div>
        <div class='flex flex-col-reverse sm:flex-row justify-between items-start mt-10 gap-x-10 gap-y-5'>
            <Description
                step={step}
                categories={categories}
            />
            <Slider
                step={step}
                categories={categories}
            />

        </div>
    </div>
})

export default Main
