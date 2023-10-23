import { LocalizedDate } from 'Base'

const CommentsList = ({
    comments,
    title,
}) => {

    return <>
        <div class='flex flex-col gap-4 px-5 md:px-20 mt-10 md:mt-12'>
            <div class="font-black text-custom-color2 text-lg">
                <span>
                    {title}
                </span>
            </div>
            {
                comments?.map(item => <>
                    <div class="shadow p-5 rounded-2xl">
                        <p class="font-bold">
                            {item?.name}
                        </p>
                        <div class="text-custom-color2">
                            <LocalizedDate
                                utcDate={item?.utcDate}
                                locale='fa'
                            />
                        </div>
                        <p>
                            {item?.body}
                        </p>
                    </div>
                </>)
            }

        </div>
    </>
}

export default CommentsList
