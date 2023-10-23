import { DefaultBreadcrumb } from 'Base'

const Breadcrumb = ({ breadcrumb }) => {

    return <>
        <section class="bg-custom-color31 shadow-inner bg-opacity-80 py-3">
            <DefaultBreadcrumb
                wrapperClass="max-w-7xl mx-auto px-5 flex items-center gap-1 overflow-x-auto text-gray-400 text-xs md:text-sm"
                itemClass="min-w-fit whitespace-nowrap flex text-black hover:text-custom-color1 transition-all"
                lastItemClass="min-w-fit whitespace-nowrap text-custom-color2"
                separator={'/'}
                breadcrumb={breadcrumb}
            />
        </section>
    </>
}

export default Breadcrumb

