import { Breadcrumb } from 'Shared'
import {
    Answers,
    Comments,
    Form,
    Heading,
    Qa,
} from 'QuestionParts'

const Layout = ({
    breadcrumb,
    comments,
    content,
    fields,
    form,
    question,
    questionReplyImage,
    questionTexts,
    translations,
}) => {

    return <>

        <Breadcrumb breadcrumb={breadcrumb} />

        <section>

            <Heading
                category={question?.relatedItems?.hierarchies?.[0]?.title}
                title={questionTexts?.qA}
            />

            <div class="max-w-7xl mx-auto px-5">

                <div class="flex justify-end">
                    <a
                        href='/questions#newQuestion'
                        class="font-bold px-6 py-3 rounded-md bg-custom-color1 text-white hover:bg-custom-color2 outline:none transition-all"
                    >
                        {questionTexts?.askQuestion}
                    </a>
                </div>

                <Qa
                    title={question?.title}
                    content={content}
                />

                <Answers
                    question={question}
                    {...questionTexts}
                    image={questionReplyImage?.image}
                    alt={questionReplyImage?.alt}
                />

                <Comments
                    {...questionTexts}
                    comments={comments}
                    image={questionReplyImage?.image}
                    alt={questionReplyImage?.alt}
                />

                <Form
                    {...form}
                    {...fields}
                    {...translations}
                    entityGuid={question?.guid}
                />

            </div>

        </section>
    </>
}

export default Layout
