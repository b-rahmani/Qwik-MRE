const Description = ({
    categories,
    step
}) => {

    return <div class='flex-1 self-stretch rounded-xl overflow-hidden px-4 md:p-8 border border-custom-color1 min-h-[100px]'>
        <p class='text-md text-justify'>
            {categories[step.value]?.description}
        </p>
    </div>
}

export default Description
