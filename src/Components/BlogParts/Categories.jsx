import { CategoryCards } from 'BlogParts'

const Categories = ({
    active,
    blogTitles,
    categories,
    localePathPrefix,
}) => {

    return <>

        <div class="bg-custom-color31 rounded-lg text-center pt-10 pb-6 px-5">
            <h4 class="font-black text-custom-color2 text-md lg:text-2xl text-center">
                {blogTitles?.categoriesTitle}
            </h4>
            <div class="max-w-4xl mx-auto mt-8">
                <CategoryCards
                    categories={categories}
                    active={active}
                    localePathPrefix={localePathPrefix}
                />
            </div>
        </div>

    </>
}

export default Categories
