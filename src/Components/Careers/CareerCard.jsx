const CareerCard = ({
    educationalRequirements,
    educationalRequirementsText,
    income,
    incomeText,
    location,
    locationText,
    title,
    titleText,
    workingHours,
    workingHoursText,
}) => {
    return <div class='h-full w-full rounded-xl shadow-2xl border-t-4 border-custom-color1 flex flex-col items-start justify-center flex-1 flex-wrap p-6'>
        <strong>{titleText}</strong><span class='font-bold text-xl'>{title}</span>
        <strong>{workingHoursText}: </strong><span>{workingHours}</span>
        <strong>{incomeText}: </strong><span>{income}</span>
        <strong>{locationText}: </strong><span>{location}</span>
        <strong>{educationalRequirementsText}: </strong><span>{educationalRequirements}</span>
    </div>
}

export default CareerCard
