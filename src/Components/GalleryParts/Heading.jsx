const Heading = ({
    description,
    title,
}) => {

    return <>
        <section>
            <div class="max-w-7xl mx-auto px-5 mt-8">
                <h1 class="font-black text-lg md:text-xl lg:text-2xl text-custom-color2">
                    {title}
                </h1>

                <p class="mt-2">
                    {description}
                </p>
            </div>
        </section>
    </>
}

export default Heading
