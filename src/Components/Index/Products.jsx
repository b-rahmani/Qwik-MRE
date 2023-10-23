import {
    component$,
    useSignal,
    useTask$
} from '@builder.io/qwik'
import {
    lg,
    md,
    sm,
    Swiper,
    SwiperSlide,
    xs,
    zero,
} from 'Base'
import {
    HeadTitle,
    ProductCard,
} from 'Shared'

const Products = component$(({
    categoriesProducts,
    productsTexts,
    localePathPrefix,
}) => {

    const step = useSignal(categoriesProducts[0]?.id)
    const childrenStep = useSignal(null)
    const parentOrChildrenCategories = useSignal(categoriesProducts)
    const submenuShownId = useSignal('')

    const subHierarchies = categoriesProducts.find(item => item.id === submenuShownId.value)?.relatedItems?.children

    useTask$(({ track }) => {
        track(() => childrenStep.value)
        if (childrenStep.value) {
            parentOrChildrenCategories.value = [categoriesProducts?.find(item => item.id === step.value)?.relatedItems?.children?.find(item => item.id === childrenStep.value)]
        } else {
            parentOrChildrenCategories.value = categoriesProducts
        }
    })

    return <>
        <section class="pt-10 md:pt-20 bg-custom-color31">
            <div class="max-w-7xl mx-auto">
                <div class='px-5'>
                    <HeadTitle
                        title={productsTexts?.probioticProducts}
                    />
                    <div class='my-10 overflow-hidden'>
                        <div class="w-full flex gap-2 border rounded-xl border-custom-color1 p-3 overflow-x-auto transition-all duration-300">
                            {
                                categoriesProducts?.map((item) => <div class='group'
                                    onClick$={() => {
                                        step.value = item.id
                                        childrenStep.value = null
                                        submenuShownId.value = item.id
                                    }}
                                >
                                    <div
                                        class={[
                                            'min-w-fit whitespace-nowrap rounded-lg py-2 px-5 text-sm md:text-base hover:bg-custom-color2 hover:text-white duration-300 transition-all',
                                            `cursor-pointer font-bold ${step.value == item.id && "bg-custom-color1 text-white"}`]}
                                        key={item?.id}
                                    >
                                        {item?.title}
                                    </div>
                                </div>
                                )
                            }
                        </div>
                        <div class={`w-full mt-2 overflow-hidden transition-all duration-700 ${subHierarchies?.length > 0 ? 'max-h-[20vh]' : 'max-h-0'}`}>
                            <div class={`flex gap-2 border rounded-xl ${subHierarchies?.length > 0 ? 'border-custom-color1' : 'border-transparent'}`}>
                                {
                                    subHierarchies?.length > 0 && subHierarchies.map((item) => <div class='group p-3'
                                        onClick$={() => { childrenStep.value = item.id }}
                                    >
                                        <div
                                            class={[
                                                `min-w-fit whitespace-nowrap rounded-lg py-2 px-5 text-sm md:text-base hover:bg-custom-color2 hover:text-white duration-300 transition-all`, `cursor-pointer font-bold ${childrenStep.value == item.id && "bg-custom-color1 text-white"}`]}
                                            key={item?.id}
                                        >
                                            {item?.title}
                                        </div>
                                    </div>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
                {
                    parentOrChildrenCategories?.value?.map((item) => {

                        return <div
                            key={item.id}
                            class={`${item.id == step.value || item.id === childrenStep.value ? "block" : "hidden"}`}
                        >
                            <Swiper
                                name={`ProductsSwiper-${item?.id}`}
                                containerClass="pb-20 px-5 2xl:px-2"
                                paginationClass="active-bullet:bg-custom-color1 active-bullet:w-5 active-bullet:rounded-md"
                                config={{
                                    breakpoints: {
                                        [zero]: {
                                            slidesPerView: 1.2,
                                            spaceBetween: 5,
                                        },
                                        [sm]: {
                                            slidesPerView: 2.2,
                                            spaceBetween: 10,
                                        },
                                        [md]: {
                                            slidesPerView: 3.1,
                                            spaceBetween: 15,
                                        },
                                        [lg]: {
                                            slidesPerView: 4,
                                            spaceBetween: 15,
                                        },
                                    },
                                }}
                            >
                                {item?.relatedItems?.products?.map(product => <SwiperSlide key={product?.id}>
                                    <ProductCard
                                        product={product}
                                        readMoreText={productsTexts?.seeProduct}
                                        localePathPrefix={localePathPrefix}
                                    />
                                </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    }
                    )
                }
            </div>
        </section >
    </>
})

export default Products
