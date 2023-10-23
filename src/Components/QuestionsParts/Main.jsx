import { RichText } from 'Shared'
import { useQuestionUrl } from 'Questions'
import { Chat } from 'Svg'
import { Form } from 'QuestionsParts'

const Main = ({
    fields,
    form,
    questions,
    questionsTexts,
    translations,
}) => {

    return <>
        <div class="lg:basis-[calc(100%-30vw)] xl:basis-[calc(100%-20vw)]">
            {questions?.data?.length > 0 &&
                <div class="flex flex-col gap-6 md:gap-16 mt-6 mb-0 md:mt-10 lg:mb-24">
                    {questions?.data?.map(item => <>
                        <div
                            class="rounded-se-[50px] rounded-es-[50px] border border-gray-100 shadow-lg px-4 py-10 grid grid-cols-1 gap-4 bg-white mx-1.5 group"
                            key={item?.id}
                        >
                            <strong class="font-bold lg:text-md line-clamp-3">
                                {item?.title}
                            </strong>
                            <RichText content={item?.relatedItems?.content} />
                            <div class="flex justify-between items-center">
                                <div class="flex gap-2">
                                    {/* <Chat
                                        class="w-5 aspect-square"
                                    />
                                    <span class="text-sm">10</span> */}
                                </div>
                                <a
                                    href={useQuestionUrl(item?.slug)}
                                    class="flex gap-2 px-6 py-3 rounded-lg bg-custom-color1 text-white text-sm hover:bg-custom-color2 outline:none transition-all">
                                    <Chat
                                        class="w-5 aspect-square fill-white"
                                    />
                                    {questionsTexts?.replyTitle}
                                </a>
                            </div>
                        </div >
                    </>)}
                </div>
            }
            <Form
                class="hidden lg:flex"
                form={form}
                {...fields}
                {...translations}
            />
        </div>
    </>
}

export default Main
