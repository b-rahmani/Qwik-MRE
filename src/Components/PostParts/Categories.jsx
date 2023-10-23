import { useCategoryUrl } from 'Blog'

const Categories = ({ categories }) => {

    return <>
        {
            categories?.map(item => <>
                <a
                    key={item?.id}
                    href={useCategoryUrl(item?.slug)}
                    class="bg-custom-color31 p-3 rounded-lg text-sm lg:text-base hover:bg-custom-color1 hover:text-white transition-all">
                    {item?.title}
                </a>
            </>)
        }
    </>
}

export default Categories
