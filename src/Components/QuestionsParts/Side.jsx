import { Categories } from 'QuestionsParts'

const Side = ({
    categories,
    questionsTexts,
}) => {
    
    return <>
        <div class="lg:basis-[26vw] xl:basis-[16vw]">
            <Categories
                categories={categories}
                questionsTexts={questionsTexts}
            />
        </div>
    </>
}

export default Side
