import { key as defaultLocaleKey } from 'DefaultLocale'
import supportedLocales from 'SupportedLocales'

const useLocalizedDateNow = (
    {
        options,
        searchParams,
    }
) => {

    var locale = searchParams?.get('locale') ?? defaultLocaleKey
    if (locale?.toLowerCase() === supportedLocales.fa) {
        return new Date()?.toLocaleDateString('fa-IR',
            {
                timeZone: "Asia/Tehran",
                ...options

            }
        )
    }

    return new Date()?.toLocaleDateString('en-US')

}

export default useLocalizedDateNow
