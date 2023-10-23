import {
    Breadcrumb,
    Pagination,
} from 'Shared'
import {
    Form,
    Heading,
    Main,
    Side,
} from 'QuestionsParts'

const Layout = ({
    breadcrumb,
    categories,
    fields,
    form,
    questions,
    questionsTexts,
    seo,
    translations,
}) => {

    return <>

        <Breadcrumb breadcrumb={breadcrumb} />

        <section>

            <Heading {...seo} />

            <div class="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-16">

                <Main
                    questions={questions}
                    questionsTexts={questionsTexts}
                    form={form}
                    fields={fields}
                    translations={translations}
                />

                <Side
                    categories={categories}
                    questionsTexts={questionsTexts}
                />

                <Form
                    class="flex lg:hidden"
                    form={form}
                    {...fields}
                    {...translations}
                />

            </div>

            <Pagination metadata={questions.metadata} />

        </section >
    </>
}

export default Layout
