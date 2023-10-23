import { component$ } from '@builder.io/qwik'
import { useLocation } from '@builder.io/qwik-city'

const Locale = component$(({
    currentLocale,
    locales,
}) => {

    return <>
        <div class="absolute end-5 lg:relative lg:end-0 py-4 md:py-8">
            <div class="flex justify-center items-center gap-0.5 h-7 sm:h-9 border rounded-3xl sm:p-2 text-xs capitalize">
                {
                    locales?.map(locale => <>
                        <a
                            href={`/${locale.key}`}
                            class={`rounded-3xl px-1.5 sm:px-3 py-1 text-custom-color2 ${locale.key == currentLocale.key ? "bg-custom-color1 text-white" : "hover:bg-custom-color2 hover:text-white"} transition-all`}
                        >
                            {locale?.key.toUpperCase()}
                        </a>
                    </>)
                }
            </div>
        </div>
    </>
})

export default Locale
