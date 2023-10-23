import { component$ } from '@builder.io/qwik'

const Backdrop = component$(({
    class: className,
    click,
}) => {
    return <>
        <div
            onClick$={click}
            class={`w-screen h-screen fixed top-0 start-0 bg-custom-color2 bg-opacity-30 z-30 duration-700 ${className}`}
        >
        </div>

    </>
})

export default Backdrop
