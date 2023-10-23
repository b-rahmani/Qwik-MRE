import { component$ } from '@builder.io/qwik'
import { Pagination as DefaultPagination } from 'Base'

const Pagination = component$(({
    internalClass,
    metadata,
}) => {
    const buttonsClass = `flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color31 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all mx-0.5 p-2`

    return <div class={internalClass}>
        <DefaultPagination
            activeClass="bg-custom-color1 border-gray-200 text-white"
            container="max-w-7xl mx-auto px-5 my-8 md:mt-14 md:mb-24"
            ellipses
            next={buttonsClass}
            last={buttonsClass}
            previous={buttonsClass}
            first={buttonsClass}
            items='flex justify-center items-center w-10 aspect-square rounded-md bg-custom-color31 hover:bg-custom-color1 hover:text-white cursor-pointer transition-all mx-0.5'
            metadata={metadata}
        />
    </div>
})

export default Pagination
