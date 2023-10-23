import { Basket } from 'Svg'

const Heading = ({ title }) => {

    return <>
        <div class="w-full flex flex-wrap items-start md:items-center gap-5 py-4 border-b-2 border-custom-color2">
            <div class="w-14 md:w-20 aspect-square flex items-center justify-center bg-custom-color31 bg-opacity-30 border border-y-gray-200 border-e-gray-200 border-s-[6px] border-custom-color2">
                <Basket
                    class="w-7 md:w-8 aspect-square"
                />
            </div>
            <h1 class="w-[calc(100%-120px)] font-black text-custom-color2 text-lg md:text-2xl">
                {title}
            </h1>
        </div>
    </>
}

export default Heading
