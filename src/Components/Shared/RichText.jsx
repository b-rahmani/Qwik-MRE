import {
    merge,
    RichText as DefaultRichText,
} from 'Base'

const RichText = ({
    class: internalClass,
    content,
}) => {

    return <DefaultRichText
        content={content}
        class={merge("text-sm sm:text-base leading-7 sm:leading-8", internalClass)}
        h1='font-bold mt-[20px] mb-[30px] text-[1.75rem]'
        h2='font-bold mt-[15px] mb-[20px] text-[1.5rem]'
        h3='font-bold mt-[15px] mb-[20px] text-[1.25rem]'
        p='mb-[10px]'
        ol='text-inherit'
        ul='text-inherit'
    />
}

export default RichText
