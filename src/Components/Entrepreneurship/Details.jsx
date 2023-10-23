import { HeadingOne } from 'Shared'

const Details = ({
    description,
    title,
}) => {

    return <div class='my-10'>
        <HeadingOne title={title} />

        <div class='border border-custom-color1 rounded-xl overflow-hidden p-6 text-justify mt-5'>
            {description}
        </div>
    </div>
}

export default Details
