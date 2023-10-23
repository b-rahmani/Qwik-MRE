import { HeadingTwo } from 'Shared'
import {
    SubDirectoryLtr,
    SubDirectoryRtl,
} from 'Svg'

const List = ({
    isRtl,
    items,
    title,
}) => {

    return <div>
        <div class="text-center mt-10">
            <HeadingTwo title={title} />
        </div>
        {
            items?.map(item => <div
                key={item.id}
                class='flex flex-col gap-y-4 my-10 group'
            >
                <p class='p-4 rounded-xl shadow shadow-custom-color1 w-fit max-w-md relative'>
                    <span>
                        {item.title}
                    </span>
                    {
                        isRtl ?
                            <SubDirectoryRtl internalClass='absolute -bottom-6 start-1 w-5 fill-custom-color1 group-hover:translate-y-2 duration-300' />
                            :
                            <SubDirectoryLtr internalClass='absolute -bottom-6 start-1 w-5 fill-custom-color1 group-hover:translate-y-2 duration-300' />
                    }

                </p>
                <p class='ms-6 p-4 rounded-xl shadow shadow-custom-color1 w-fit max-w-lg'>{item.description}</p>
            </div>)
        }
    </div>
}

export default List
