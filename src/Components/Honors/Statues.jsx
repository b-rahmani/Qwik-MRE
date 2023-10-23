import { StatueCard } from 'Honors'
import { HeadingTwo } from 'Shared'

const Statues = ({
    items,
    title,
}) => {

    return <div class='py-10'>
        <HeadingTwo title={title} />
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5'>
            {items.map(item => <StatueCard
                key={item.id}
                {...item}
            />)}

        </div>
    </div>
}

export default Statues
