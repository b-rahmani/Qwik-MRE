const useLocalizedDate = ({
    localeKey,
    localesEnum,
    utcDate
}) => {

    if (!utcDate) {
        return ""
    }
    let normalizedValue =
        (utcDate && utcDate?.toString()?.endsWith('Z'))
            ? utcDate :
            (utcDate + 'Z')

    if (localeKey?.toLowerCase() === localesEnum?.fa?.toLowerCase()) {
        return new Date(normalizedValue)?.toLocaleDateString('fa-IR',
            {
                timeZone: "Asia/Tehran"
            }
        )
    }

    return new Date(normalizedValue)?.toLocaleDateString('en-US')
}

export default useLocalizedDate
