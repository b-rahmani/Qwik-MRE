import { EventCard } from 'EventsParts'

const List = ({
    items,
    translations,
}) => {

    return <>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4 md:my-10'>

            {items?.map(item => <EventCard
                key={item.id}
                event={item}
                translations={translations}
            />
            )}
        </div>
    </>
}

export default List
