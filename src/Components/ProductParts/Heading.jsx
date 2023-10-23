const Heading = ({title}) => {

    return <>
        <div class="max-w-7xl mx-auto px-5 flex gap-3 mt-8">
            <h1 class="text-custom-color2 font-black text-lg md:text-xl lg:text-2xl py-2">
                {title}
            </h1>
        </div>
    </>
}

export default Heading
