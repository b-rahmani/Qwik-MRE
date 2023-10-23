import {
    component$,
    useSignal,
    useTask$
} from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'
import {
    useCategoryUrl,
    useProductsUrl,
} from 'Products'

const Categories = component$(({
    categories,
    currentCategory,
    localePathPrefix,
    productsTexts,
}) => {

    const { url } = useLocation()
    let params = new URL(url).searchParams
    let categorySlug = params.get("category")

    let foundedSubmenu = ''
    if (categorySlug) {
        foundedSubmenu = categories.find(item => item.slug === categorySlug || item.relatedItems.children?.some(item => item.slug === categorySlug))?.relatedItems?.children
    } else {
        foundedSubmenu = ''
    }

    return <>
        <div class="w-full flex gap-2 mt-6 mb-4 rounded-xl p-3 overflow-x-auto border rounded-xl border border-custom-color1">
            {
                categories?.map(item => <>
                    <a
                        href={useCategoryUrl(item?.slug, localePathPrefix)}
                        aria-label={item?.title}
                        class={`min-w-fit whitespace-nowrap rounded-lg py-2 px-5 text-sm md:text-base hover:bg-custom-color2 hover:text-white duration-300 transition-all cursor-pointer ${currentCategory && (currentCategory.key == item.key || item.relatedItems.children?.some(child => child.slug === categorySlug)) ? "bg-custom-color1 text-white" : ""}`}
                        key={item?.id}
                    >
                        {item?.title}
                    </a>
                </>)
            }
            <a
                href={useProductsUrl(localePathPrefix)}
                class={`${!currentCategory && "bg-custom-color1 text-white"} rounded-lg py-2 px-5 hover:bg-custom-color2 hover:text-white duration-300 transition-all`}
                aria-label={productsTexts?.seeAllProducts}
            >
                {productsTexts?.all}
            </a>
        </div>
        <div class={`flex gap-2 border rounded-xl ${foundedSubmenu?.length > 0 ? 'border-custom-color1' : 'border-transparent'}`}>
            {
                foundedSubmenu?.length > 0 && foundedSubmenu.map((item) => <a

                    href={useCategoryUrl(item?.slug,localePathPrefix)}
                    class='group p-3'
                >
                    <div
                        class={`min-w-fit whitespace-nowrap rounded-lg py-2 px-5 text-sm md:text-base hover:bg-custom-color2 hover:text-white duration-300 transition-all cursor-pointer ${categorySlug == item.slug && "bg-custom-color1 text-white"}`}
                        key={item?.id}
                    >
                        {item?.title}
                    </div>
                </a>
                )
            }
        </div>
    </>
})

export default Categories
