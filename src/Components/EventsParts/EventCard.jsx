import {
    Image,
    LocalizedDate,
} from 'Base'
import {
    Calendar,
    Location,
    Presenter,
    Status,
} from 'Svg'

const EventCard = ({
    event,
    translations,
}) => {

    return <div>
        <Image
            src={event?.relatedItems.imageUrl}
            containerClass='w-full aspect-[2/3] overflow-hidden'
        // imageClass='w-full h-full object-contain object-center'
        />
        <strong class='text-center text-md font-bolder line-clamp-2 py-2'>{event.title}</strong>
        <p class='flex items-center gap-4'>
            <Calendar class='w-5' />
            <LocalizedDate
                utcDate={event?.utcDate}
                locale='fa'
            />
        </p>
        <p class='flex items-center gap-4'>
            <Location class='w-5 fill-custom-color1' />
            <span>{event?.placesPlaceTitle}</span>
        </p>
        <p class='flex items-center gap-4'>
            <Status class='w-5' />
            <span>{translations[event?.eventStateKey]}</span>
        </p>
        <p class='flex items-center gap-4'>
            <Presenter class='w-5 fill-custom-color2' />
            <span>{event.contactsPersonDisplayName}</span>
        </p>

    </div>
}

export default EventCard
