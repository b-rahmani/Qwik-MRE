import { component$ } from '@builder.io/qwik'

const ContactInfo = component$(({
    address,
    addressIcon,
    addressLink,
    addressTitle,
    footerTitle,
    phone,
    phoneIcon,
    phoneTitle,
    postalCode,
    postalCodeIcon,
    postalCodeTitle,
    secondaryAddress,
    secondaryAddressLink,
    secondaryAddressTitle,
    secondaryPhone,
    secondaryPhoneTitle,
    thirdPhone,
    thirdPhoneTitle,
    footerSites,
}) => {

    return <>
        <div class="lg:col-span-2">
            <b class="relative block text-md pb-4 mb-4 after:absolute after:bottom-0 after:start-0 after:w-20 md:after:w-1/2 after:h-[2px] after:bg-white">
                {footerTitle}
            </b>
            <ul>
                {/* <li class="my-2">
                    <a
                        href={addressLink}
                        title={addressTitle}
                        aria-label={addressTitle}
                        class='flex items-center gap-2 hover:ps-1.5 hover:text-custom-color11 transition-all'
                    >
                        <span
                            dangerouslySetInnerHTML={addressIcon}
                            class="inline-block w-6 aspect-square fill-custom-color11"
                        />

                        <span class="flex-1">{address}</span>
                    </a>
                </li>
                <li class="my-2">
                    <a
                        href={`tel:${phone}`}
                        title={phoneTitle}
                        aria-label={phoneTitle}
                        class='flex items-center gap-2 hover:ps-1.5 hover:text-custom-color11 transition-all'
                    >
                        <span
                            dangerouslySetInnerHTML={phoneIcon}
                            class="inline-block w-6 aspect-square fill-custom-color11"
                        />

                        <span class="flex-1 group-hover:text-custom-color1">{phone}</span>
                    </a>
                </li>
                <li class="my-2">
                    <a
                        href={`tel:${phone}`}
                        title={secondaryPhoneTitle}
                        aria-label={secondaryPhoneTitle}
                        class='flex items-center gap-2 hover:ps-1.5 hover:text-custom-color11 transition-all'
                    >
                        <span
                            dangerouslySetInnerHTML={phoneIcon}
                            class="inline-block w-6 aspect-square fill-custom-color11"
                        />
                        <span class="flex-1 group-hover:text-custom-color1">{secondaryPhone}</span>
                    </a>
                </li>
                <li class="my-2">
                    <a
                        href={`tel:${phone}`}
                        title={thirdPhoneTitle}
                        aria-label={thirdPhoneTitle}
                        class='flex items-center gap-2 hover:ps-1.5 hover:text-custom-color11 transition-all'
                    >
                        <span
                            dangerouslySetInnerHTML={phoneIcon}
                            class="inline-block w-6 aspect-square fill-custom-color11"
                        />
                        <span class="flex-1 group-hover:text-custom-color1">{thirdPhone}</span>
                    </a>
                </li>
                <li class="my-2">
                    <span
                        class='flex items-center gap-2 hover:ps-1.5 hover:text-custom-color11 transition-all '
                        title={postalCodeTitle}
                    >
                        <span
                            dangerouslySetInnerHTML={postalCodeIcon}
                            class="inline-block w-6 aspect-square fill-custom-color11"
                        />

                        <span class="flex-1">{postalCode}</span>
                    </span>
                </li> */}
                {footerSites.items.map(item => <li
                    key={item.id}
                    class="my-2">
                    <a
                        href={item.link}
                        class='flex items-center gap-2 hover:ps-1.5 hover:text-custom-color11 transition-all '
                        title={item.title}
                    >
                        <span class="flex-1">{item.title}</span>
                    </a>
                </li>)}
            </ul>
        </div>
    </>
})

export default ContactInfo
