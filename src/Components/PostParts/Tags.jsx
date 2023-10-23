import { useTagUrl } from 'Blog'

const Tags = ({ tags }) => {

    return <>
        {
            tags?.map(item => <>
                <a
                    href={useTagUrl(item?.slug)}
                    class="px-3 py-1 bg-gray-200 text-sm rounded-lg hover:bg-custom-color1 hover:text-white transition-all"
                    key={item?.id}
                >
                    {item?.title}
                </a>
            </>)
        }
    </>
}

export default Tags
