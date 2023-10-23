import { component$ } from '@builder.io/qwik'
import { Map } from 'Base'

const CentralOfficeInfo = component$(({
    address,
    addressIcon,
    addressLink,
    addressTitle,
    mapLatitude,
    mapLongitude,
    phone,
    phoneIcon,
    phoneTitle,
    postalCode,
    postalCodeIcon,
    postalCodeTitle,
    secondaryPhone,
    secondaryPhoneIcon,
    secondaryPhoneTitle,
    thirdPhone,
    thirdPhoneIcon,
    thirdPhoneTitle,
    title,
}) => {

    return <>
        <div class="w-full lg:flex-1 grid grid-cols-1 gap-5 rounded-xl border-[3px] border-custom-color1 p-4">
            <strong class="bg-custom-color2 py-2 px-4 w-fit h-fit mx-auto rounded-md text-white text-lg md:text-2xl inline-block text-center">
                {title}
            </strong>
            <ul class='grid grid-cols-1 grid-rows-9'>
                <li class="row-span-1">
                    <a
                        href={addressLink}
                        title={addressTitle}
                        aria-label={addressTitle}
                        class='flex flex-col items-center gap-2'
                    >
                        <span
                            dangerouslySetInnerHTML={addressIcon}
                            class="inline-block w-6 aspect-square fill-custom-color1 hover:fill-custom-color2 transition-all"
                        />
                        <span class='inline-block w-20 h-0.5 bg-slate-200' />
                        <span class="flex-1"><strong>{addressTitle}: </strong>{address}</span>
                    </a>
                </li>
                <li class="row-span-1">
                    <a
                        href={`tel:${phone}`}
                        title={phoneTitle}
                        aria-label={phoneTitle}
                        class='flex flex-col items-center gap-2'
                    >
                        <span
                            dangerouslySetInnerHTML={phoneIcon}
                            class="inline-block w-6 aspect-square fill-custom-color1 hover:fill-custom-color2 transition-all"
                        />
                        <span class='inline-block w-20 h-0.5 bg-slate-200'></span>
                        <span class="flex-1">{phone}</span>
                    </a>
                </li>
                <li class="row-span-1">
                    <a
                        href={`tel:${phone}`}
                        title={secondaryPhoneTitle}
                        aria-label={secondaryPhoneTitle}
                        class='flex flex-col items-center gap-2'
                    >
                        <span class="flex-1">{secondaryPhone}</span>
                    </a>
                </li>
                <li class="row-span-1">
                    <a
                        href={`tel:${phone}`}
                        title={thirdPhoneTitle}
                        aria-label={thirdPhoneTitle}
                        class='flex flex-col items-center gap-2'
                    >
                        <span class="flex-1">{thirdPhone}</span>
                    </a>
                </li>
                <li class="row-span-1">
                    <span
                        class='flex flex-col items-center gap-2'
                        title={postalCodeTitle}
                    >
                        <span
                            dangerouslySetInnerHTML={postalCodeIcon}
                            class="inline-block w-6 aspect-square fill-custom-color1 hover:fill-custom-color2 transition-all"
                        />
                        <span class='inline-block w-20 h-0.5 bg-slate-200'></span>
                        <span class="flex-1">{postalCode}</span>
                    </span>
                </li>
                <li class="row-span-4">
                    <Map
                        hasNavigation
                        containerClass='w-full aspect-square max-w-lg mx-auto rounded-md overflow-hidden'
                        zoom={15}
                        coordinates={[mapLatitude, mapLongitude]}
                        marker={{
                            coordinates: [mapLatitude, mapLongitude]
                        }}
                        id='centralOfficeInfo'
                    />
                </li>
            </ul>
        </div>

    </>
})

export default CentralOfficeInfo
