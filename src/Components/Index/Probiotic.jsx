import {
    $,
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'
import {
    ProbioticContent,
    ProbioticDesktopTabs,
    ProbioticMobileTabs,
} from 'Index'

const Probiotic = component$(({
    bg,
    probiotic,
}) => {

    const items = useSignal(probiotic)
    const activeItemId = useSignal(probiotic[0]?.id)
    const newRotate = useSignal(0)
    const defaultClass = "absolute w-24"
    const tabHandler = $((ActiveItem) => {
        const calculatedIndex = [...items.value]
            .sort((a, b) => a.order - b.order)
            .findIndex((el) => el.id === ActiveItem.id)
        newRotate.value = newRotate.value + calculatedIndex
        const newItems = items.value.map((item) => ({
            ...item,
            order: item.order >= calculatedIndex ? Math.abs(item.order - calculatedIndex) : 4 - Math.abs(item.order - calculatedIndex),
        }))
        activeItemId.value = ActiveItem.id
        items.value = newItems
    })

    const responsiveMaps = [
        {
            itemPosition: "bottom-[-70px] end-0 start-0 mx-auto",
            boxPosition: "translate-x-[calc(50%-55px)] translate-y-[2%]"
        },
        {
            itemPosition: "top-[calc(50%-50px)] end-[-50px]",
            boxPosition: "translate-x-[calc(50%-65px)] -translate-y-[2%]"
        },
        {
            itemPosition: "top-[-60px] end-0 start-0 mx-auto",
            boxPosition: "translate-x-[calc(50%-55px)] -translate-y-[2%]"
        },
        {

            itemPosition: "top-[calc(50%-50px)] start-[-50px]",
            boxPosition: "translate-x-[calc(50%-45px)] -translate-y-[2%]"
        },
    ]

    useVisibleTask$(() => {
        const options = {
            root: null,
            threshold: 1
        }

        const callback = function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    tabHandler(probiotic[1])
                }
            })
        }

        let observer = new IntersectionObserver(callback, options)

        document.querySelectorAll('#probiotic').forEach(element => {
            if (element) {
                observer.observe(element)
            }
        })

    }, { strategy: 'document-ready' })

    return <>
        <section
            class="py-10 md:py-20"
            dir='rtl'
        >
            <div class="relative max-w-7xl mx-auto px-5 flex flex-col lg:flex-row items-center">

                <ProbioticDesktopTabs
                    newRotate={newRotate.value}
                    probiotic={probiotic}
                    activeItemId={activeItemId.value}
                    items={items.value}
                    defaultClass={defaultClass}
                    tabHandler={tabHandler}
                    bg={bg}
                />

                <ProbioticMobileTabs
                    newRotate={newRotate.value}
                    activeItemId={activeItemId.value}
                    items={items.value}
                    defaultClass={defaultClass}
                    tabHandler={tabHandler}
                    responsiveMaps={responsiveMaps}
                    bg={bg}
                />

                <ProbioticContent
                    activeItemId={activeItemId.value}
                    items={items.value}
                    probiotic={probiotic}
                    responsiveMaps={responsiveMaps}
                />

            </div>
        </section>
    </>
})

export default Probiotic
