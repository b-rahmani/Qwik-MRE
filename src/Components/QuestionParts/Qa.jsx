import { RichText } from 'Shared'

const Qa = ({
    content,
    title,
}) => {

    return <>
        <div class="mt-14">
            <strong class="font-bold text-xl">
                {title}
            </strong>
            <RichText content={content} />
        </div>
    </>
}

export default Qa
