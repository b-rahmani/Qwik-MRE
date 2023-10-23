import { merge } from 'Base'

const HeadTitle = ({
    href,
    internalClass,
    title,
}) => {

    return <h3 class={merge([
        "font-black text-2xl md:text-3xl text-white text-center px-5 my-5 md:my-10 bg-custom-color1 w-fit mx-auto",
        "rounded-md transition-all hover:bg-custom-color2 duration-700",
        internalClass])} >
        {href ? <a
            href={href}
        >
            {title}
        </a> :
            title
        }
    </h3 >
}

export default HeadTitle
