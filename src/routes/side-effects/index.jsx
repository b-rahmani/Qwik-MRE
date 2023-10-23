import {
    $,
    component$,
    useSignal,
} from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'Base'
import { useSeo } from 'Seo'
import { getPage } from 'Contents'
import { List } from 'SideEffects'
import {
    Breadcrumb,
    HeadingOne,
} from 'Shared'

const getData = routeLoader$(async (props) => {

    const [page] = await useAsync(
        [
            getPage('sideEffects', props),
        ]
    )
    return {
        ...page,
    }
})

const Index = component$(() => {

    const data = getData().value
    const {
        breadcrumb,
        drugsSideEffects,
        naturalSideEffects,
        sideEffectStatics,
        vitaminsSideEffects,
    } = data

    const allData = [drugsSideEffects, naturalSideEffects, vitaminsSideEffects]

    //

    const selectedType = useSignal(allData[0])
    const selectedItem = useSignal(selectedType.value?.items[0])

    const selectTypeHandler = $((type) => {

        selectedType.value = type
        selectedItem.value = type?.items[0]
    })

    //

    return <>
        <Breadcrumb breadcrumb={breadcrumb} />

        <section class='mb-5 max-w-7xl mx-auto px-4 2xl:px-0'>
            <HeadingOne title={sideEffectStatics?.title} />
            {/* <List
                allData={allData}
                sideEffectStatics={sideEffectStatics}
            /> */}

            {/* delete  */}
            <div class='grid grid-cols-2 lg:grid-cols-[30%,1fr,30%] my-10 md:my-20 items-start min-h-[50vh]'>
                <div class='w-full flex flex-col gap-y-2 px-4 py-20'>
                    {allData?.map(type => <div
                        key={type?.title}
                        onClick$={() => selectTypeHandler(type)}
                        class={`w-fit px-4 py-2 cursor-pointer rounded-md hover:-translate-x-2 duration-300 select-none ${type?.title === selectedType.value?.title ? 'bg-custom-color1 text-white' : 'shadow shadow-custom-color1 text-black'}`}
                    >
                        {type?.title}
                    </div>
                    )}
                </div>
                <div class='flex-1 flex flex-wrap gap-4 px-4 py-20'>
                    {selectedType?.value?.items?.map(item => <div
                        key={item?.name}
                        onClick$={() => selectedItem.value = item}
                        class={`w-fit px-4 py-2 text-sm rounded-md hover:translate-y-1 duration-300 cursor-pointer select-none ${item?.name === selectedItem.value?.name ? 'bg-custom-color2 text-white' : 'shadow shadow-custom-color2 text-black'}`}>
                        {item?.name}
                    </div>)}
                </div>
                <div class='flex-1 flex flex-col gap-y-4 px-4 col-span-2 lg:col-span-1'>
                    <p class='text-xl font-bold text-center'>{sideEffectStatics?.title}</p>
                    <p class='mt-5'>
                        {selectedItem.value?.sideEffects}
                    </p>
                </div>
            </div>

            {/* ^^^^ */}

        </section >

    </>
})

export default Index

const head = ({ resolveValue }) => {
    return useSeo(getData, resolveValue)
}

export { head }
