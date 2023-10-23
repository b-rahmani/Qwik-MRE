import { RichText } from 'Shared'
import { Chat } from 'Svg'

const Answers = ({
    expertsAnswer,
    question,
}) => {

    return <>
        {question?.relatedItems?.answer.length > 0 &&
            <>
                <div class="flex gap-2 font-black text-custom-color2 text-lg mt-14 px-5 md:px-20">
                    <Chat
                        class="w-5 aspect-square"
                    />
                    <span>
                        {expertsAnswer}
                    </span>
                </div>

                <div class="flex flex-col gap-6 mt-6 mb-0 md:mt-5 md:mb-12 px-5 md:px-32">
                    {
                        question?.relatedItems?.answer?.map(item => <>
                            <div
                                class="bg-custom-color31 rounded-lg p-5 grid grid-cols-1 gap-2 mx-1.5"
                                key={item?.id}
                            >
                                <strong class="font-bold text-lg">
                                    {item?.naturalPersonName}
                                </strong>
                                {/* <div class="text-custom-color2">
                                    <LocalizedDate
                                        utcDate={item?.utcDate}
                                        locale='fa'
                                    />
                                </div> */}
                                <RichText content={item?.relatedItems?.content} />

                            </div>
                        </>)
                    }
                </div>
            </>
        }
    </>
}

export default Answers
