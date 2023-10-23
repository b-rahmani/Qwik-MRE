import { HeadingOne } from 'Shared'

const Main = ({
    title,
    description,
}) => {

    return <div class='mt-5 mb-10'>
        <HeadingOne title={title} />
        <div class='border rounded-xl overflow-hidden p-6 text-justify mt-6'>
            {description}
        </div>
    </div>
}

export default Main
