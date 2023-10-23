import { Chat } from 'Svg'

const Heading = ({ pageTitle }) => {

    return <>

        <div class="max-w-7xl mx-auto px-5">
            <div class="w-full flex flex-wrap items-center gap-5 py-7 mb-7 border-b-2 border-gray-200">
                <div class="w-14 md:w-20 aspect-square flex items-center justify-center bg-custom-color31 bg-opacity-30 border border-y-gray-200 border-e-gray-200 border-s-[6px] border-custom-color2">
                    <Chat
                        class="w-5 md:w-6 aspect-square"
                    />
                </div>
                <h1 class="w-[calc(100%-120px)] font-black text-custom-color2 text-lg md:text-2xl">
                    {pageTitle}
                </h1>
            </div>
        </div>
    </>
}

export default Heading
