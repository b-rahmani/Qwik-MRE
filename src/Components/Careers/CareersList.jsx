import { component$ } from '@builder.io/qwik'
import { CareerCard } from 'Careers'
import { HeadingOne } from 'Shared'

const CareersList = component$(({
    items,
    title,
    id,
    ...rest
}) => {
    return <div class='max-w-7xl mx-auto px-4 2xl:px-0 mt-5'>
        <HeadingOne title={title} />
        <div class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-start justify-start gap-10 py-10'>
            {
                items?.map(jobOpening => <CareerCard
                    key={id}
                    {...jobOpening}
                    {...rest}
                />)
            }
        </div>
    </div>
})

export default CareersList
