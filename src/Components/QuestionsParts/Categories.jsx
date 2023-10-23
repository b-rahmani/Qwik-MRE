import { useCategoryUrl } from 'Questions'

const Categories = ({
    categories,
    questionsTexts,
}) => {

    return <>
        <div>
            <b class="block text-md pb-2 mb-4 text-custom-color2 border-b border-gray-200">
                {questionsTexts?.categoryTitle}
            </b>
            <div class="flex flex-col sm:flex-row flex-wrap lg:flex-col gap-4 text-center">
                {
                    categories?.map(item => <>
                        <a
                            key={item?.id}
                            href={useCategoryUrl(item?.slug)}
                            class="bg-custom-color31 p-3 rounded-lg hover:bg-custom-color1 hover:text-white transition-all"
                        >
                            {item?.title}
                        </a>
                    </>)
                }
            </div>
        </div>

    </>
}

export default Categories
