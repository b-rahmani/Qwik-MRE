import { Image } from 'Base'

const Form = ({
    bg,
    description,
    title,
}) => {
    
    return <>
        <div class="relative w-full py-10">
            <Image
                src={bg}
                alt={title}
                containerClass="absolute z-10 top-0 w-full"
            />
            <div class="relative z-20 max-w-7xl mx-auto px-5 py-5 lg:py-20 flex justify-center lg:justify-end text-black">
                <div class="max-w-full w-[600px] lg:w-1/2">
                    <div class="bg-white p-5 md:p-10 rounded-3xl">

                        <h1 class="capitalize font-bold text-md md:text-3xl mb-4">
                            {title}
                        </h1>
                        <p class="mb-6">
                            {description}
                        </p>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <div>
                                <input
                                    type="text"
                                    class="w-full border border-custom-color21 px-5 py-3 focus:outline-none placeholder-black"
                                    placeholder='Name'
                                />
                            </div>

                            <div>
                                <input
                                    type="mail"
                                    class="w-full border border-custom-color21 px-5 py-3 focus:outline-none placeholder-black"
                                    placeholder='Email'
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                rows="6"
                                class="w-full mt-2 border border-custom-color21 px-5 py-3 focus:outline-none placeholder-black"
                                placeholder='Message'
                            >
                            </textarea>
                        </div>

                        <div>
                            <button
                                class="w-full bg-custom-color2 text-white px-10 py-3 hover:bg-custom-color1 transition-all"
                            >
                                SUBMIT
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
}

export default Form
