const HeadingTwo = ({
    title,
}) => {

    return <div class="flex gap-3 mt-8">
        <span class="w-3 bg-custom-color2 rounded-e-lg"></span>
        <h2 class="flex flex-wrap gap-1 font-bold text-lg md:text-xl lg:text-2xl py-2">
            <span class="font-black text-custom-color2">{title}</span>
        </h2>
    </div>
}

export default HeadingTwo
